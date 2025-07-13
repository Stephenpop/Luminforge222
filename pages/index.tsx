import * as React from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicHomepage } from "../components/plasmic/professional_services/PlasmicHomepage";
import { useRouter } from "next/router";

function Homepage() {
  const router = useRouter();
  if (!router.isReady) return null; // Add this check

  return (
    <PageParamsProvider__
      route={router.pathname}
      params={router.query}
      query={router.query}
    >
      <PlasmicHomepage />
    </PageParamsProvider__>
  );
}

export default Homepage;
