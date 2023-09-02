// import ExampleUsersPosts from "../components/example-users-posts";
import PostSection from "../components/postSection";
import { Helmet } from "react-helmet";
// import Header from "../components/header";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Synapse Social - Home</title>
        <meta
          name="description"
          content="Synapse Social's Home page."
        />
        <meta
          name="keywords"
          content="HTML, Tailwind CSS, React, social media site,"
        />
        <meta name="author" content="Ali Najimedini" />
      </Helmet>

      <PostSection />
    </>
  );
}

export default HomePage;
