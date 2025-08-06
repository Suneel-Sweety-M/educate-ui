import { Helmet } from "react-helmet-async";

export function Meta({ title, description }) {
  return (
    <Helmet>
      <title>{title} | Your Company</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
