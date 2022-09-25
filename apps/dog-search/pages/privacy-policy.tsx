import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <div className="tw-h-fit tw-py-4">
      <Head>
        <title>Dog Search App - Privacy Policy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="tw-text-black">
        <h1 className=" tw-text-center tw-text-4xl tw-font-bold">
          Privacy Policy
        </h1>
        <h2 className="tw-my-4">Introduction</h2>
        <p className="tw-pl-4">
          This Privacy Policy governs your visit to{' '}
          <a href={'https://petfinder-api-apps.vercel.app'}>
            https://petfinder-api-apps.vercel.app
          </a>{' '}
          and explains how we collect, safeguard and disclose information that
          results from your use of our service. Your data is used to provide and
          improve this service. By using this service, you agree to the
          collection and use of information in accordance with this policy.
        </p>
        <h2 className="tw-my-4">1. Analytics</h2>
        <p className="tw-pl-4">
          We may use third-party Service Providers to monitor and analyze the
          use of our Service. Google AnalyticsGoogle Analytics is a web
          analytics service offered by Google that tracks and reports website
          traffic. Google uses the data collected to track and monitor the use
          of our Service. This data is shared with other Google services. Google
          may use the collected data to contextualise and personalise the ads of
          its own advertising network. For more information on the privacy
          practices of Google, please visit the{' '}
          <a href={'https://policies.google.com/privacy?hl=en'}>
            Google Privacy Terms web page
          </a>
          . We also encourage you to review{' '}
          <a href={'https://support.google.com/analytics/answer/6004245'}>
            Google{"'"}s policy for safeguarding your data
          </a>
          .
        </p>
      </main>
    </div>
  )
}
