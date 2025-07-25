/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 64G9hSPmkkec6VSdJWQs85
// Component: FKvuw6gKzzyt

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

import Header from "../../Header"; // plasmic-import: Ps8j7CtJjNk2/component
import CtaBottom from "../../CtaBottom"; // plasmic-import: oDsVOrxtmEGs/component
import Footer from "../../Footer"; // plasmic-import: F4LUYNjfWy9e/component

import { useScreenVariants as useScreenVariantskeJy5JOzWFik } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: keJy5JOzWFik/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 64G9hSPmkkec6VSdJWQs85/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: FKvuw6gKzzyt/css

createPlasmicElementProxy;

export type PlasmicAboutUs__VariantMembers = {};
export type PlasmicAboutUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutUs__VariantsArgs;
export const PlasmicAboutUs__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutUs__ArgsType = {};
type ArgPropType = keyof PlasmicAboutUs__ArgsType;
export const PlasmicAboutUs__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutUs__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  pageBanerSection?: Flex__<"div">;
  h1?: Flex__<"h1">;
  companiesSection?: Flex__<"div">;
  container2?: Flex__<"div">;
  ctaBottom?: Flex__<typeof CtaBottom>;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultAboutUsProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAboutUs__RenderFunc(props: {
  variants: PlasmicAboutUs__VariantsArgs;
  args: PlasmicAboutUs__ArgsType;
  overrides: PlasmicAboutUs__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantskeJy5JOzWFik()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <Stack__
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"pageBanerSection"}
            data-plasmic-override={overrides.pageBanerSection}
            className={classNames(projectcss.all, sty.pageBanerSection)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__xiWqE)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"About Us"}
              </h1>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__kNHuv)}>
            <div className={classNames(projectcss.all, sty.freeBox___8S29)}>
              <div className={classNames(projectcss.all, sty.columns__tqDgt)}>
                <div className={classNames(projectcss.all, sty.column__qhcrn)}>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox___8Km7O)}
                  >
                    <h2
                      className={classNames(
                        projectcss.all,
                        projectcss.h2,
                        projectcss.__wab_text,
                        sty.h2__s8Gw3
                      )}
                    >
                      {"Our Founder"}
                    </h2>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__uAbd
                      )}
                    >
                      {
                        "LuminForge was brought to life by Eldric Thorne, a visionary photographer with a passion for capturing the essence of every moment. With over a decade of experience in marketing photography, Eldric founded the company in 2015 to empower businesses with stunning visual storytelling. His journey began with a single camera and a dream, evolving into a commitment to excellence that defines our work today."
                      }
                    </div>
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__rGmrk
                      )}
                    >
                      {
                        "Eldric\u2019s innovative approach blends technical mastery with creative flair, inspiring a team dedicated to client success. Beyond photography, he advocates for sustainable practices in the industry, ensuring LuminForge not only creates beautiful images but also contributes positively to the community. His leadership continues to drive our mission to illuminate brands worldwide."
                      }
                    </div>
                  </Stack__>
                </div>
                <div className={classNames(projectcss.all, sty.column__rBh9T)}>
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__wMbIx)}
                    displayHeight={"100%"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"100%"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"100%"}
                    loading={"lazy"}
                    src={{
                      src: "/plasmic/professional_services/images/ppppppAvif.avif",
                      fullWidth: 500,
                      fullHeight: 625,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__a3SdR)}>
            <Stack__
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox___3NhH)}
            >
              <div className={classNames(projectcss.all, sty.freeBox__pGyZs)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ryoOj)}
                >
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__sl8X
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "Why Choose Us"
                      : "Why Choose Us"}
                  </h2>
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__ursQf)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__vlfTn)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__m9FPe
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox___1Ubzl
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__unbSg
                            )}
                          >
                            {"Our History"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___9XbVw
                            )}
                          >
                            {
                              "LuminForge\u2019s story began in 2015 when we set out to redefine marketing photography with a focus on quality and innovation. Starting as a small studio, we quickly gained recognition for our ability to transform brands through captivating imagery. Over the years, we\u2019ve grown into a trusted name, serving diverse clients while staying true to our roots of creativity and dedication, making us a reliable choice for businesses seeking excellence."
                            }
                          </div>
                        </Stack__>
                      </Stack__>
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__em4Li)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__ziKv
                        )}
                      >
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__koTkO
                          )}
                        >
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__veiXz
                            )}
                          >
                            {"Founder Bio"}
                          </h3>
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text___2YDmX
                            )}
                          >
                            {
                              "Founded by Eldric Thorne, a seasoned photographer with over ten years of industry experience, LuminForge reflects his vision of blending art with strategy. Eldric\u2019s journey started with a passion for capturing life\u2019s moments, leading him to establish a company that empowers brands with stunning visuals. His leadership and commitment to sustainable practices continue to inspire our team, ensuring every project aligns with our mission of illuminating success."
                            }
                          </div>
                        </Stack__>
                      </Stack__>
                    </div>
                  </Stack__>
                </Stack__>
              </div>
            </Stack__>
          </section>
          <div
            data-plasmic-name={"companiesSection"}
            data-plasmic-override={overrides.companiesSection}
            className={classNames(projectcss.all, sty.companiesSection)}
          >
            <Stack__
              as={"div"}
              data-plasmic-name={"container2"}
              data-plasmic-override={overrides.container2}
              hasGap={true}
              className={classNames(projectcss.all, sty.container2)}
            >
              <h2
                className={classNames(
                  projectcss.all,
                  projectcss.h2,
                  projectcss.__wab_text,
                  sty.h2___3JsGl
                )}
              >
                {"We work with Brands"}
              </h2>
              <div className={classNames(projectcss.all, sty.freeBox__ptqLb)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__coudy)}
                >
                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__jDxnY)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-strapi.svg"
                    }
                  />

                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__rBLhV)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-segment.svg"
                    }
                  />

                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__xHVmp)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-xstate.svg"
                    }
                  />

                  <PlasmicImg__
                    alt={""}
                    className={classNames(sty.img__uYhpA)}
                    displayHeight={"48px"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={
                      "https://plasmic-ray.s3.us-west-2.amazonaws.com/logo-mapbox.svg"
                    }
                  />
                </Stack__>
              </div>
            </Stack__>
          </div>
          <CtaBottom
            data-plasmic-name={"ctaBottom"}
            data-plasmic-override={overrides.ctaBottom}
            className={classNames("__wab_instance", sty.ctaBottom)}
          />

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </Stack__>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "pageBanerSection",
    "h1",
    "companiesSection",
    "container2",
    "ctaBottom",
    "footer"
  ],
  header: ["header"],
  pageBanerSection: ["pageBanerSection", "h1"],
  h1: ["h1"],
  companiesSection: ["companiesSection", "container2"],
  container2: ["container2"],
  ctaBottom: ["ctaBottom"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageBanerSection: "div";
  h1: "h1";
  companiesSection: "div";
  container2: "div";
  ctaBottom: typeof CtaBottom;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutUs__VariantsArgs;
    args?: PlasmicAboutUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAboutUs__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanerSection: makeNodeComponent("pageBanerSection"),
    h1: makeNodeComponent("h1"),
    companiesSection: makeNodeComponent("companiesSection"),
    container2: makeNodeComponent("container2"),
    ctaBottom: makeNodeComponent("ctaBottom"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */
