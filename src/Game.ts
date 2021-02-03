import * as Recast from 'recast-detour'
import { NullEngine, RecastJSPlugin } from '@babylonjs/core'

export default class Game {
  engine: NullEngine
  navigation: RecastJSPlugin

  constructor() {
    this.engine = new NullEngine()
    this.navigation = new RecastJSPlugin(Recast)
  } 
}