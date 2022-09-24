/**
 * @author WMXPY
 * @namespace MarkedMixinDateMonaco
 * @description Factory
 */

import { MarkedMonacoExportsMixinFactory } from "@sudoo/marked-monaco-mixin";
import { MarkedDateMixinDeclaration } from "./declaration";

export const markedDateMonacoMixinFactory =
    MarkedMonacoExportsMixinFactory.fromExports(
        "marked-mixin-date",
        MarkedDateMixinDeclaration,
    );
