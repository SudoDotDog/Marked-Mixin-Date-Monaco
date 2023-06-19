/**
 * @author WMXPY
 * @namespace MarkedMixinDateMonaco
 * @description Factory
 */

import { MarkedMonacoClassMixinFactory } from "@sudoo/marked-monaco-mixin";
import { MarkedDateMixinConstructorDeclaration, MarkedDateMixinInstanceDeclaration, MarkedDateMixinStaticDeclaration } from "./declaration";

export const markedDateMonacoMixinFactory =
    MarkedMonacoClassMixinFactory.fromElements(
        "marked-mixin-date",
        {
            constructor: MarkedDateMixinConstructorDeclaration,
            staticElements: MarkedDateMixinStaticDeclaration,
            instanceElements: MarkedDateMixinInstanceDeclaration,
        },
    );
