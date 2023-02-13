import { coreApp } from "../../../../../apps/core/mod.ts";
import {
  InRelation,
  number,
  object,
  optional,
  OutRelation,
  string,
} from "../../../deps.ts";

export const positionPure = {
  name: string(),
};

const positionInRel = {};

const positionOutRel = {};

export const positions = () =>
  coreApp.odm.setModel(
    "position",
    positionPure,
    positionInRel, // as Record<string, InRelation>,
    positionOutRel,
  );
