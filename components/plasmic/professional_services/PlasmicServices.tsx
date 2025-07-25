/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 64G9hSPmkkec6VSdJWQs85
// Component: 8Ii-q2rN8Pnh

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
import ServicesWhite from "../../ServicesWhite"; // plasmic-import: wiFbZI4KHisd/component
import Footer from "../../Footer"; // plasmic-import: F4LUYNjfWy9e/component

import { useScreenVariants as useScreenVariantskeJy5JOzWFik } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: keJy5JOzWFik/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: 64G9hSPmkkec6VSdJWQs85/projectcss
import sty from "./PlasmicServices.module.css"; // plasmic-import: 8Ii-q2rN8Pnh/css

import Icon8Icon from "./icons/PlasmicIcon__Icon8"; // plasmic-import: 5iRERYFtlMC7/icon

createPlasmicElementProxy;

export type PlasmicServices__VariantMembers = {};
export type PlasmicServices__VariantsArgs = {};
type VariantPropType = keyof PlasmicServices__VariantsArgs;
export const PlasmicServices__VariantProps = new Array<VariantPropType>();

export type PlasmicServices__ArgsType = {};
type ArgPropType = keyof PlasmicServices__ArgsType;
export const PlasmicServices__ArgProps = new Array<ArgPropType>();

export type PlasmicServices__OverridesType = {
  root?: Flex__<"div">;
  header?: Flex__<typeof Header>;
  pageBanerSection?: Flex__<"div">;
  h1?: Flex__<"h1">;
  img?: Flex__<typeof PlasmicImg__>;
  h2?: Flex__<"h2">;
  footer?: Flex__<typeof Footer>;
};

export interface DefaultServicesProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicServices__RenderFunc(props: {
  variants: PlasmicServices__VariantsArgs;
  args: PlasmicServices__ArgsType;
  overrides: PlasmicServices__OverridesType;
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
            <div className={classNames(projectcss.all, sty.freeBox__jA9A2)}>
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
                {"Services"}
              </h1>
            </div>
          </div>
          <section className={classNames(projectcss.all, sty.section__dimM1)}>
            <div className={classNames(projectcss.all, sty.freeBox__hev30)}>
              <div className={classNames(projectcss.all, sty.freeBox__cH59K)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__jhbM6)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__buTUp)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column___5Aorq)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__o0Wqk
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__jPvqh
                            )}
                          >
                            {"Creative Consultation"}
                          </h3>
                        }
                        slot2={
                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__dkSQx
                            )}
                          >
                            {
                              "We begin with a detailed consultation to understand your brand\u2019s vision and goals, ensuring every photo aligns with your marketing strategy."
                            }
                          </div>
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__g4SVx)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite___7SauT
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3___8IrjW
                            )}
                          >
                            {"Professional Shoot"}
                          </h3>
                        }
                        slot2={
                          "Our skilled photographers capture high-quality images using state-of-the-art equipment, tailored to your specific needs."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__us2Eu)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__cTzDd
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__w2Kr3
                            )}
                          >
                            {"Expert Editing"}
                          </h3>
                        }
                        slot2={
                          "We enhance your photos with precise editing techniques, delivering polished visuals that stand out."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__ot9K)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite___45Ye0
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__cAm30
                            )}
                          >
                            {"Final Delivery"}
                          </h3>
                        }
                        slot2={
                          "Receive your optimized images promptly, ready for use across all your marketing platforms."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__b1IHm)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__vcv0O
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__iopwy
                            )}
                          >
                            {"Client Review"}
                          </h3>
                        }
                        slot2={
                          "We collaborate with you to review the images, incorporating feedback to ensure complete satisfaction before finalizing."
                        }
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__liYy4)}
                    >
                      <ServicesWhite
                        className={classNames(
                          "__wab_instance",
                          sty.servicesWhite__a2N36
                        )}
                        slot={
                          <h3
                            className={classNames(
                              projectcss.all,
                              projectcss.h3,
                              projectcss.__wab_text,
                              sty.h3__cNEhm
                            )}
                          >
                            {"Ongoing Support"}
                          </h3>
                        }
                        slot2={
                          "Enjoy continued assistance with future projects, ensuring your visual content evolves with your brand."
                        }
                      />
                    </div>
                  </Stack__>
                </Stack__>
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__qtRiy)}>
            <div className={classNames(projectcss.all, sty.freeBox__grT77)}>
              <div className={classNames(projectcss.all, sty.freeBox__diqHc)}>
                <div
                  className={classNames(projectcss.all, sty.freeBox__lpa0S)}
                />
              </div>
            </div>
          </section>
          <section className={classNames(projectcss.all, sty.section__wjAxg)}>
            <div className={classNames(projectcss.all, sty.freeBox__i7Fph)}>
              <div className={classNames(projectcss.all, sty.freeBox__qSx63)}>
                <Stack__
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ccXfp)}
                >
                  <Stack__
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.columns__osE5)}
                  >
                    <div
                      className={classNames(projectcss.all, sty.column__egkcL)}
                    >
                      <PlasmicImg__
                        data-plasmic-name={"img"}
                        data-plasmic-override={overrides.img}
                        alt={""}
                        className={classNames(sty.img)}
                        displayHeight={"952px"}
                        displayMaxHeight={"none"}
                        displayMaxWidth={"100%"}
                        displayMinHeight={"0"}
                        displayMinWidth={"0"}
                        displayWidth={"100%"}
                        loading={"lazy"}
                        src={{
                          src: "/plasmic/professional_services/images/ppppAvif.avif",
                          fullWidth: 500,
                          fullHeight: 752,
                          aspectRatio: undefined
                        }}
                      />
                    </div>
                    <div
                      className={classNames(projectcss.all, sty.column__mkKts)}
                    >
                      <Stack__
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__nvFlv
                        )}
                      >
                        <h2
                          data-plasmic-name={"h2"}
                          data-plasmic-override={overrides.h2}
                          className={classNames(
                            projectcss.all,
                            projectcss.h2,
                            projectcss.__wab_text,
                            sty.h2
                          )}
                        >
                          {"Why Choose Us"}
                        </h2>
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__h4Lcv
                          )}
                        >
                          {
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                          }
                        </div>
                        <Stack__
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.columns__xgpUj
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__jrKxd
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__np7GO
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__azbRe
                                  )}
                                >
                                  {"Welcoming  trusted"}
                                </h3>
                              }
                              slot2={
                                "We offer a welcoming approach with proven reliability."
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__m0Pvj
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__jyHpx
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__wqJq6
                                  )}
                                >
                                  {"Proven and Safe"}
                                </h3>
                              }
                              slot2={
                                "Stay informed with our considerate communication."
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__l0J65
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__cC3Y6
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__m21VB
                                  )}
                                >
                                  {"Instant Results"}
                                </h3>
                              }
                              slot2={
                                "Experience fast delivery of high-quality outcomes."
                              }
                            />
                          </div>
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__omCCz
                            )}
                          >
                            <ServicesWhite
                              className={classNames(
                                "__wab_instance",
                                sty.servicesWhite__tp0Rt
                              )}
                              slot={
                                <h3
                                  className={classNames(
                                    projectcss.all,
                                    projectcss.h3,
                                    projectcss.__wab_text,
                                    sty.h3__qmoOk
                                  )}
                                >
                                  {"Mindful notifications"}
                                </h3>
                              }
                              slot2={"Mindful notifications"}
                            />
                          </div>
                        </Stack__>
                      </Stack__>
                    </div>
                  </Stack__>
                </Stack__>
              </div>
            </div>
          </section>
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
  root: ["root", "header", "pageBanerSection", "h1", "img", "h2", "footer"],
  header: ["header"],
  pageBanerSection: ["pageBanerSection", "h1"],
  h1: ["h1"],
  img: ["img"],
  h2: ["h2"],
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
  img: typeof PlasmicImg__;
  h2: "h2";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicServices__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicServices__VariantsArgs;
    args?: PlasmicServices__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicServices__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicServices__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicServices__ArgProps,
          internalVariantPropNames: PlasmicServices__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicServices__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicServices";
  } else {
    func.displayName = `PlasmicServices.${nodeName}`;
  }
  return func;
}

export const PlasmicServices = Object.assign(
  // Top-level PlasmicServices renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanerSection: makeNodeComponent("pageBanerSection"),
    h1: makeNodeComponent("h1"),
    img: makeNodeComponent("img"),
    h2: makeNodeComponent("h2"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicServices
    internalVariantProps: PlasmicServices__VariantProps,
    internalArgProps: PlasmicServices__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicServices;
/* prettier-ignore-end */
