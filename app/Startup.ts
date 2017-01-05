/**
 * Created by grahul on 1/5/2017.
 */
import  { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import {CustomerModuleLibrary} from "./CustomerModuleLibrary"
const platform = platformBrowserDynamic();
platform.bootstrapModule(CustomerModuleLibrary)

