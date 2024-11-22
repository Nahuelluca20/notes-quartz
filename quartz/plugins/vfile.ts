import type { Node, Parent } from "hast"
import { type Data, VFile } from "vfile"

export type QuartzPluginData = Data
export type ProcessedContent = [Node, VFile]

export function defaultProcessedContent(vfileData: Partial<QuartzPluginData>): ProcessedContent {
  const root: Parent = { type: "root", children: [] }
  const vfile = new VFile("")
  vfile.data = vfileData
  return [root, vfile]
}
