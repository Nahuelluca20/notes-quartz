---
tags:
  - LLM
	- Build a Large Language Model (From Scratch)
	- Books
---

![[Pasted image 20241209083145.png]]

## Calculate the scores

For calculate the scores we need to get the dot products of the vector with the each of the others.
For example, we want to get the `attn_scores` of the vector 2 in the following tensor:

```python
inputs = torch.tensor(
    [
        [0.43, 0.15, 0.89],  # Your (x^1)
        [0.55, 0.87, 0.66],  # journey (x^2)
        [0.57, 0.85, 0.64],  # starts (x^3)
        [0.22, 0.58, 0.33],  # with (x^4)
        [0.77, 0.25, 0.10],  # one (x^5)
        [0.05, 0.80, 0.55],  # step (x^6)
    ]
)
```

We do a for loop for get the dot product of the `[0.55, 0.87, 0.66]` with the other vectors

```python
query = inputs.shape[0]
atten_scores_2 = torch.empty(inputs.shape[0])

for i, x_i in enumerate(inputs):
    atten_scores_2[i] = torch.dot(x_i, query)

print(atten_scores_2)
```

What I do here is create a empty tensor with the shape of the input (totals rows 6) and then calculate each dot product related to query that is `[0.55, 0.87, 0.66]`

```shell
tensor([0.9544, 1.4950, 1.4754, 0.8434, 0.7070, 1.0865])
```

## Calculate the Attention Weights

For calculate the attention weights normalize to 1 each element in `atten_scores_2` this means that the sum of element in `atten_scores_2` result to 1.

![[Pasted image 20241212193027.png]]
![[Pasted image 20241212193046.png]]

```python
attn_weights_2_tmp = atten_scores_2 / atten_scores_2.sum()

print(atten_scores_2.sum())
print("Attention weights:", attn_weights_2_tmp)
print("Sum:", attn_weights_2_tmp.sum())
```

```shell
tensor(6.5617)
Attention weights: tensor([0.1455, 0.2278, 0.2249, 0.1285, 0.1077, 0.1656]) Sum: tensor(1.0000)
```

instead of that we can use the `torch.sofmax()` function

## Calculating the context vector

We need to multiplying the embedded input tokens, with the corresponding attention weights and then summing the resulting vectors.

```python
query = inputs[1]
context_vec_2 = torch.zeros(query.shape)
print(context_vec_2)
# print(attn_weights_2[4] * inputs[4] + attn_weights_2[3] * inputs[3])
for i, x_i in enumerate(inputs):
    context_vec_2 += attn_weights_2[i] * x_i

print(context_vec_2)
```

```shell
tensor([0., 0., 0.])
tensor([0.4419, 0.6515, 0.5683])
```

![[Pasted image 20241212193406.png]]
