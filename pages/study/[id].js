import { getGlobalData } from '../../utils/global-data';
import { getStudyById } from '../../utils/mdx-utils';
import Head from 'next/head';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';

const components = {
  a: CustomLink,
  Head,
};

export default function StudyPage({ study, globalData }) {
  if (!study) {
    return <div>Post não encontrado</div>;
  }

  return (
    <Layout>
      <SEO
        title={`${study.title} - ${globalData.name}`}
        description={study.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {study.title}
          </h1>
          {study.description && (
            <p className="text-xl mb-4">{study.description}</p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark">{study.body}</article>
        </main>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
 
  const globalData = getGlobalData();
  const study = await getStudyById(params.id);


  if (!study) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      globalData,
      study,
    },
  };
};
