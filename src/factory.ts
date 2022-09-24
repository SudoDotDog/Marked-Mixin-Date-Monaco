/**
 * @author WMXPY
 * @namespace MarkedMixinDateMonaco
 * @description Factory
 */

import { MarkedMonacoClassMixinFactory } from "@sudoo/marked-monaco-mixin";
import { MarkedDateMixinConDeclaration, MarkedDateMixinInstanceDeclaration, MarkedDateMixinStaticDeclaration } from "./declaration";

export const markedDateMonacoMixinFactory =
    MarkedMonacoClassMixinFactory.fromElements(
        "marked-mixin-date",
        {
            constructor: MarkedDateMixinConDeclaration,
            staticElements: MarkedDateMixinStaticDeclaration,
            instanceElements: MarkedDateMixinInstanceDeclaration,
        },
    );
