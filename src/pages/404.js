import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 30000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Dompeyreton | 404 Page Not Found</title>
      </Head>
      <div className="not-found">
        <div className="container">
          <h1 className="not-found--error">404 Error - Page Not Found</h1>
          <h2>Oops!</h2>
          <p>
            It seems like the page you&#39;re looking for doesn&#39;t exist.
            <br></br> But don&#39;t worry, there&#39;s plenty to see and explore
            at our Chateau in Corbières, France.
          </p>
          <p>
            Why not head back to our homepage and see what&#39;s on offer? From
            relaxing in our vineyard to exploring the nearby countryside,
            there&#39;s something for everyone here.
          </p>
          <Link href="/" className="not-found--button">
            Back to Home
          </Link>
          <hr></hr>
          <p>
            You can also get in touch with us if you need help finding what
            you&#39;re looking for.
          </p>
          <p className="not-found--see_you">À bientôt! (See you soon!)</p>
        </div>
      </div>
    </>
  );
};

export default NotFound;
