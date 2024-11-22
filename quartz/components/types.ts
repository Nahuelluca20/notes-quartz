import type { ComponentType, JSX } from "preact"
import type { StaticResources } from "../util/resources"
import type { QuartzPluginData } from "../plugins/vfile"
import type { GlobalConfiguration } from "../cfg"
import type { Node } from "hast"
import type { BuildCtx } from "../util/ctx"

export type QuartzComponentProps = {
  ctx: BuildCtx
  externalResources: StaticResources
  fileData: QuartzPluginData
  cfg: GlobalConfiguration
  children: (QuartzComponent | JSX.Element)[]
  tree: Node
  allFiles: QuartzPluginData[]
  displayClass?: "mobile-only" | "desktop-only"
} & JSX.IntrinsicAttributes & {
    [key: string]: any
  }

export type QuartzComponent = ComponentType<QuartzComponentProps> & {
  css?: string
  beforeDOMLoaded?: string
  afterDOMLoaded?: string
}

export type QuartzComponentConstructor<Options extends object | undefined = undefined> = (
  opts: Options,
) => QuartzComponent
