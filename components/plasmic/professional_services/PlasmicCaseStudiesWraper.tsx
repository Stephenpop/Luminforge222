/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 64G9hSPmkkec6VSdJWQs85
// Component: 0UnkNVJmsgUB

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import Button from "../../Button"; // plasmic-import: HPUuT6AmnD8F/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 64G9hSPmkkec6VSdJWQs85/projectcss
import sty from "./PlasmicCaseStudiesWraper.module.css"; // plasmic-import: 0UnkNVJmsgUB/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: la8VPcxfOXSB/icon

createPlasmicElementProxy;

export type PlasmicCaseStudiesWraper__VariantMembers = {};
export type PlasmicCaseStudiesWraper__VariantsArgs = {};
type VariantPropType = keyof PlasmicCaseStudiesWraper__VariantsArgs;
export const PlasmicCaseStudiesWraper__VariantProps =
  new Array<VariantPropType>();

export type PlasmicCaseStudiesWraper__ArgsType = {
  children?: React.ReactNode;
  slot?: React.ReactNode;
};
type ArgPropType = keyof PlasmicCaseStudiesWraper__ArgsType;
export const PlasmicCaseStudiesWraper__ArgProps = new Array<ArgPropType>(
  "children",
  "slot"
);

export type PlasmicCaseStudiesWraper__OverridesType = {
  root?: Flex__<"a"> & Partial<LinkProps>;
  freeBox?: Flex__<"div">;
};

export interface DefaultCaseStudiesWraperProps {
  children?: React.ReactNode;
  slot?: React.ReactNode;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicCaseStudiesWraper__RenderFunc(props: {
  variants: PlasmicCaseStudiesWraper__VariantsArgs;
  args: PlasmicCaseStudiesWraper__ArgsType;
  overrides: PlasmicCaseStudiesWraper__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();

  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  return (
    <PlasmicLink__
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.a,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
      component={Link}
      href={`/story`}
      platform={"nextjs"}
    >
      {renderPlasmicSlot({
        defaultContents: (
          <PlasmicImg__
            alt={""}
            className={classNames(sty.img__gvsB)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"100%"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/professional_services/images/people31046351920Jpg.jpg",
              fullWidth: 1920,
              fullHeight: 1281,
              aspectRatio: undefined
            }}
          />
        ),

        value: args.children
      })}
      <Stack__
        as={"div"}
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        {renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <h3
                className={classNames(
                  projectcss.all,
                  projectcss.h3,
                  projectcss.__wab_text,
                  sty.h3__efsuw
                )}
              >
                {"Case Studies Lorem Heading "}
              </h3>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__rbw33
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ...."
                }
              </div>
              <Button
                className={classNames("__wab_instance", sty.button__r8Er9)}
                color={"blackCoffee"}
                submitsForm={true}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__b14Vl
                  )}
                >
                  {"Read More"}
                </div>
              </Button>
            </React.Fragment>
          ),
          value: args.slot
        })}
      </Stack__>
    </PlasmicLink__>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "a";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCaseStudiesWraper__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCaseStudiesWraper__VariantsArgs;
    args?: PlasmicCaseStudiesWraper__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCaseStudiesWraper__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCaseStudiesWraper__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicCaseStudiesWraper__ArgProps,
          internalVariantPropNames: PlasmicCaseStudiesWraper__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicCaseStudiesWraper__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCaseStudiesWraper";
  } else {
    func.displayName = `PlasmicCaseStudiesWraper.${nodeName}`;
  }
  return func;
}

export const PlasmicCaseStudiesWraper = Object.assign(
  // Top-level PlasmicCaseStudiesWraper renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicCaseStudiesWraper
    internalVariantProps: PlasmicCaseStudiesWraper__VariantProps,
    internalArgProps: PlasmicCaseStudiesWraper__ArgProps
  }
);

export default PlasmicCaseStudiesWraper;
/* prettier-ignore-end */
