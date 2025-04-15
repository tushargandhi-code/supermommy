import Outbrain from "@/components/outbrain";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy",
  description: "",
  openGraph: {
    url: "/privacy-policy",
    title: "Privacy Policy",
    description: "",
    images: ["/meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description: "",
    images: ["/meta.png"],
  },
};

const Page = () => {
  return (
    <main className="container mt-4 sm:mt-6 md:mt-8 lg:mt-10 mb-20">
      <h1 className="text-center text-lg lg:text-xl font-semibold">PRIVACY POLICY</h1>
      <div className="mt-8 flex flex-col gap-y-8">
        <p>
          We collect the content, communications and other information you provide when you use our
          products, including when you sign up for an account, create or share content, and message
          or communicate with others.
        </p>
        <p>
          This can include information in or about the content you provide (like metadata), such as
          the location of a photo or the date a file was created. It can also include what you see
          through features we provide, such as our camera, so we can do things like suggest masks
          and filters that you might like, or give you tips on using camera formats. Our systems
          automatically process content and communications you and others provide to analyze context
          and what's in them for the purpose of great user experience.
        </p>
        <p>
          We also receive and analyze content, communications and information that other people
          provide when they use our products. Enjoy with. This can include information about you,
          such as when others share or comment on a photo of you, send a message to you, or upload,
          sync or import your contact information.
        </p>
        <p>
          We collect information about how you use our Products, such as the types of content you
          view or engage with; the features you use; the actions you take; the people or accounts
          you interact with; and the time, frequency and duration of your activities. For example,
          we log when you're using and have last used our Products, and what posts and other content
          you view on our platforms. We also collect information about how you use features like our
          camera.
        </p>
        <p>
          If you use our Products for purchase or any other financial transactions, we collect
          information about the purchase or transaction. This includes payment information, such as
          your credit or debit card number and other card information; other account and
          authentication information; and billing, shipping and contact details.
        </p>
        <p>
          All these details are stored in our database and are used for improving user experience
          such as when the user is making any transaction again then we suggest to use the same
          debit or credit card to ensure hassle free experience for the user.
        </p>
        <p>
          We collect information about the people, pages, accounts, hashtags and groups you are
          connected to and how you interact with them across our platforms, such as people you
          communicate with the most or groups you are part of. We also collect contact information
          if you choose to upload, sync or import it from a device (such as an address book or call
          log or SMS log history), which we use for things like helping you and others find people
          you may know.
        </p>
        <p>
          We collect information from and about the devices you use that are integrated with our
          platform, and we combine this information across different devices you use. For example,
          we use information collected about your use of our platform on your phone to better
          personalize the content (including ads) or features you see when you use our platform on
          another device, such as your laptop or tablet, or to measure whether you took an action in
          response to an ad we showed you on your phone on a different device.
        </p>
        <p>
          We collect device attributes such as information about the operating system, hardware and
          software versions, battery level, signal strength, available storage space, browser type,
          app and file names and types, and plugins that are integrated on the device.
        </p>
        <p>
          We collect information about operations and behaviors performed on the device, such as
          whether a window is in foreground or background, or mouse movements (which can help
          distinguish humans from bots).
        </p>
        <p>
          We use unique identifiers, device IDs, and other identifiers, such as apps or accounts
          that you use.
        </p>
        <p>
          We use device signals such as bluetooth signals, and information about nearby Wi-Fi access
          points, beacons, and cell towers.
        </p>
        <p>
          We use data from device settings such as information you allow us to receive through
          device settings you turn on, such as access to your GPS location, camera or photos.
        </p>
        <p>
          We use network and connection information such as the name of your mobile operator or ISP,
          language, time zone, mobile phone number, IP address, connection speed.
        </p>
        <p>
          Advertisers, content creators and publishers can send information to us including our
          social plug-ins (such as the Like button). These partners provide information about your
          activities on the platform such as about your device, websites you visit, purchases you
          make, the ads you see, and how you use their services. We also receive information about
          your online and offline actions and purchases from third-party data providers who have the
          rights to provide us with your information.
        </p>
        <p>
          Partners receive your data when you visit or use their services or through third parties
          they work with. We require each of these partners to have lawful rights to collect, use
          and share your data before providing any data to us.
        </p>
        <p>
          We use the information we have to provide personalized features and content (including
          your Feed, Explore, Shops, Stories and ads) and make suggestions for you (such as groups
          or events you may be interested in or topics you may want to follow) on and off our
          platform. To create personalized platform that are unique and relevant to you, we use your
          connections, preferences, interests and activities based on the data we collect and learn
          from you and others (including any data with special protections you choose to provide);
          how you use and interact with our platform; and the people, places, or things you're
          connected to and interested in on and off our platform.
        </p>
        <p>
          We use Location-related information such as your current location, where you live, the
          places you like to go, and the businesses and people you're near-to provide, personalize
          and improve our platform, including ads, for you and others. Location-related information
          can be based on things like precise device location (if you've allowed us to collect it),
          IP addresses, and information such as check-ins or events you attend.
        </p>
        <p>
          We use the information we have to develop, test and improve our platform, including by
          conducting surveys and research, and testing and troubleshooting new products and
          features.
        </p>
        <p>
          We use the information we have about you-including information about your interests,
          actions and connections-to select and personalize ads, offers and other sponsored content
          that we show you and how we use your choices over the data we use to select ads.
        </p>
        <p>
          We use the information we have (including your activity off our platform, such as the
          websites you visit and ads you see) to help advertisers and other partners measure the
          effectiveness and distribution of their ads and services, and understand the types of
          people who use their services and how people interact with their websites, apps, and
          services.
        </p>
        <p>
          We use the information we have to verify accounts and activity, combat harmful conduct,
          detect and prevent spam and other bad experiences, maintain the integrity of our Products,
          and promote safety and security on and off our platform. For example, we use data we have
          to investigate suspicious activity or violations of our terms or policies, or to detect
          when someone needs help.
        </p>
        <p>
          We use the information we have to send you marketing communications, communicate with you
          about our Products, and let you know about our policies and terms. We also use your
          information to respond to you when you contact us.
        </p>
        <p>
          We use the information we have (including from research partners we collaborate with) to
          conduct and support research and innovation on topics of general social welfare,
          technological advancement, public interest, health and well-being. For example, we analyze
          information we have about migration patterns during crises to aid relief efforts.
        </p>
        <p className="text-lg">Platform Policy</p>
        <p>
          By using this platform, you agree that TheSuperMommy can use a set of APIs, SDKs, plugins,
          code, specifications, documentation, technology, and services (such as content) that
          enables others, including application developers and website operators, to retrieve data
          from TheSuperMommy or provide data to us. We reserve the right to change this policy at
          any time without notice, so please check it regularly. Your continued use of the
          TheSuperMommy Platform constitutes acceptance of any changes. You also agree to and are
          responsible for ensuring that you comply with the TheSuperMommy Terms of Use and
          TheSuperMommy Community Guidelines.
        </p>
        <p>
          We provide the TheSuperMommy Platform to support several types of apps and services.
          First, we provide them to help members of our community share their own content with apps
          or services. We also support apps and services that help brands and advertisers understand
          and manage their audience, develop their content strategy, and obtain digital rights.
          Finally, we provide the TheSuperMommy Platform to help broadcasters and publishers
          discover content, get digital rights to media, and share media using web embeds. The
          TheSuperMommy platform is not intended for other types of apps or services.
        </p>
        <p>
          By using this platform you also agree to the following terms of service – Don’t confuse,
          deceive, defraud, mislead, or harass anyone. Be transparent about your identity and your
          app’s identity. Don’t use the platform for any app that constitutes, promotes or is used
          in connection with spyware, adware, or any other malicious programs or code. Don’t store
          or cache TheSuperMommy login credentials.
        </p>
        <p>
          You ensure that the app is stable and easily navigable. For example, verify that you have
          integrated Login correctly. Your app shouldn’t crash or hang during the testing process.
        </p>
        <p>
          Provide meaningful customer support for your app, and make it easy for people to contact
          you.
        </p>
        <p>
          Comply with any requirements or restrictions imposed on usage of TheSuperMommy user photos
          and videos (“User Content”) by their respective owners. You are solely responsible for
          making use of user content in compliance with owners’ requirements or restrictions.
        </p>
        <p>
          Remove within 24 hours any user Content or other information that the owner asks you to
          remove.
        </p>
        <p>
          Obtain a person’s consent before including their user Content in any ad or any of your
          posts.
        </p>
        <p>
          Only store or cache User Content for the period necessary to provide your app’s service.
        </p>
        <p>If you store or cache User Content, keep it up to date.</p>
        <p>
          Don’t use the TheSuperMommy Platform to simply display User Content, import or backup
          content, or manage TheSuperMommy relationships, without our prior permission.
        </p>
        <p>Don’t participate in any “like”, “share”, “comment” or “follower” exchange programs.</p>
        <p>
          Don’t use follower information for anything other than analytics without our prior
          permission. For example, don’t display these relationships in your app.
        </p>
        <p>
          Only use the INSIGHTS DATA endpoint to inform the account holder of their own analytics
          information. Do not use it for any other service and do not share it with any third
          parties.
        </p>
        <p>
          Ensure your comments are uniquely tailored for each person. Don’t post unauthorized
          commercial communications or spam on TheSuperMommy Platform.
        </p>
        <p>
          Respect the limits we’ve placed on TheSuperMommy functionality and the way TheSuperMommy
          looks and functions. Don’t offer experiences that change it.
        </p>
        <p>Don’t attempt to build an ad network on TheSuperMommy.</p>
        <p>
          Don’t ask users to like, comment or share your post in return of money or any unauthorized
          manner.
        </p>
        <p>
          Protect the information you receive from us against unauthorized access, use, or
          disclosure. For example, don’t use data obtained from us to provide tools that are used
          for surveillance.
        </p>
        <p>
          Don’t transfer any data that you receive from us (including anonymous, aggregate, or
          derived data) to any ad network, data broker, or other advertising or monetization-related
          service.
        </p>
        <p>
          Only incentivize a person to log into your app or enter a promotion. Don’t incentivize
          other actions.
        </p>
        <p>
          If you want to facilitate or promote online gambling, online real money games of skill, or
          online lotteries, get our written permission before using any of our products.
        </p>
        <p>
          Don’t use an unreasonable amount of bandwidth, or adversely impact the stability of
          TheSuperMommy servers or the behavior of other apps using the TheSuperMommy Platform.
        </p>
        <p>
          Don’t reverse engineer the TheSuperMommy apps source code or APIs or any of
          TheSuperMommy’s apps.
        </p>
        <p>
          Don’t attempt to identify groups of individuals or create demographic clusters for the
          purpose of contacting or targeting TheSuperMommy members on or off TheSuperMommy.
        </p>
        <p>
          Don’t sell, lease, or sublicense the TheSuperMommy Platform or any data derived through
          the Platform.
        </p>
        <p>
          Comply with all applicable laws or regulations. Don’t provide or promote content that
          violates any rights of any person, including but not limited to intellectual property
          rights, rights of privacy, or rights of personality.
        </p>
        <p>
          Don’t post anyone’s copyrighted pictures, videos or other contents that you don’t have
          rights upon. In that case seek permission from that creator and only if he/she agrees then
          post their content on TheSuperMommy platform.
        </p>
        <p>
          Make sure that you comply with all terms and conditions of the TheSuperMommy platform else
          severe steps like legal action, account ban, may take place.
        </p>
        <p>
          All your posts must not include any logos, watermarks, calls-to-action, other promotional
          content.
        </p>
        <p>
          Additional policies for posts with Attribution: a. Post must not be generic (i.e., only
          enable people to share unique and personal content). b. If a person clicks on your post,
          ensure you direct them to an experience that enhances the post.
        </p>
        <p>
          TheSuperMommy may put a limit or block accounts that make a large number of posts that are
          not primarily in response to direct user actions.
        </p>
        <p>Apart from our policies you must follow these policies too –</p>
        <p>
          <Link className="text-blue-500" href="https://www.youtube.com/t/terms" target="_blank">
            https://www.youtube.com/t/terms
          </Link>
        </p>
        <p>
          <Link
            className="text-blue-500"
            href="https://policies.google.com/privacy"
            target="_blank"
          >
            https://policies.google.com/privacy
          </Link>
        </p>
        <p>
          <Link
            className="text-blue-500"
            href="https://myaccount.google.com/permissions"
            target="_blank"
          >
            https://myaccount.google.com/permissions
          </Link>
        </p>
        <p>
          Also our platform uses YouTube API Services. Hence you must abide by their Terms as well.
        </p>
        <p>
          Enforcement is both automated and manual, and can include disabling your account,
          restricting you and your app’s access to TheSuperMommy Platform, requiring that you delete
          data, terminating our agreements with you or any other action that we deem appropriate.
        </p>
        <p>
          TheSuperMommy may change, suspend, or discontinue the availability of any TheSuperMommy
          Platform at any time. In addition, TheSuperMommy may impose limits on certain features and
          services or restrict your access to parts or all of the TheSuperMommy APIs or the
          TheSuperMommy website without notice or liability.
        </p>
        <p>
          If TheSuperMommy elects to provide you with support or modifications for the TheSuperMommy
          Platform, this support may be terminated at any time without notice to you. •
          TheSuperMommy reserves the right to charge the prices it pays to users for their post and
          any changes can be made to it without any prior notice . • TheSuperMommy doesn’t guarantee
          that the TheSuperMommy Platform is free of inaccuracies, errors, bugs, or interruptions,
          or is reliable, accurate, complete, or otherwise valid. • You represent and warrant that
          you own or have secured all rights necessary to display, distribute and deliver all
          content in your app or website. To the extent your users are able to share content from
          your app or website on or through TheSuperMommy, you represent and warrant that you own or
          have secured all necessary rights for them to do so in accordance with TheSuperMommy’s
          available functionality.
        </p>
        <p>
          TheSuperMommy primarily communicates with creators through email. Please ensure that the
          email addresses associated with your TheSuperMommy account are current and correct and
          that you don’t filter out these messages.
        </p>
        <p>
          You represent and warrant that you satisfy all licensing, reporting, and payout
          obligations to third parties in connection with your app or website.
        </p>
        <p>
          You give us all rights necessary to enable your app to work with TheSuperMommy, including
          the right to incorporate information you provide to us into other parts of TheSuperMommy,
          and the right to attribute the source of information using your name and logos.
        </p>
        <p>
          You also give as all rights to use the content posted by you on TheSuperMommy and
          TheSuperMommy can use this wherever and whenever required.
        </p>
        <p>
          You are responsible for restricting access to your content in accordance with all
          applicable laws and regulations, including geo-filtering or age-gating access where
          required
        </p>
        <p>
          You grant us and our affiliates a non-exclusive, transferable, sub-licensable,
          royalty-free, worldwide license to use any data, content, and other information made
          available by you or on your behalf in connection with your use of our Platform. This
          license survives even if you stop using the platform feature. You are responsible for
          obtaining the necessary rights from all applicable rights holders to grant this license.
          Any content made available by you or on your behalf in connection with the platform
          features is deemed part of your app.
        </p>
        <p>
          Disclaimer of Any Warranty: TheSuperMommy Platform and all data derived through such
          Platform are provided “as is” with no warranty, express or implied, of any kind and
          Instagram expressly disclaims any and all warranties and conditions, including but not
          limited to, any implied warranty of merchantability, fitness for a particular purpose,
          availability, security, title and non-infringement. You are solely responsible for any
          damage that results from the use of any TheSuperMommy Platform and all any data derived
          through such Platform including, but not limited to, any damage to your computer system or
          loss of data.
        </p>
        <p>
          Limitation of Liability: TheSuperMommy shall not, under any circumstances, be liable to
          you for any indirect, incidental, consequential, special or exemplary damages arising out
          of or in connection with use of the TheSuperMommy Platform and any data derived through
          such Platform, whether based on breach of contract, breach of warranty, tort (including
          negligence, product liability or otherwise), or any other pecuniary loss, whether or not
          TheSuperMommy has been advised of the possibility of such damages. Under no circumstances
          shall TheSuperMommy be liable to you for any amount.
        </p>
        <p>
          Release and Waiver: To the maximum extent permitted by applicable law, you hereby release
          and waive all claims against TheSuperMommy, and its subsidiaries, affiliates, officers,
          agents, licensors, co-branders or other partners, and employees from any and all liability
          for claims, damages (actual and/or consequential), costs and expenses (including
          litigation costs and attorneys’ fees) of every kind and nature, arising from or in any way
          related to your use of the TheSuperMommy Platform and data derived through such Platform.
        </p>
        <p>
          Hold Harmless and Indemnify: To the maximum extent permitted by applicable law, you agree
          to hold harmless and indemnify TheSuperMommy and its subsidiaries, affiliates, officers,
          agents, licensors, co-branders or other partners, and employees from and against any
          third-party claim arising from or in any way related to your use of the TheSuperMommy
          Platform and any data derived through the Platform, including any liability or expense
          arising from all claims, losses, damages (actual and/or consequential), suits, judgments,
          litigation costs and attorneys’ fees, of every kind and nature. TheSuperMommy shall use
          good faith efforts to provide you with written notice of such claim, suit or action.
        </p>
        <p>
          Relationship of the Parties: Notwithstanding any provision hereof, for all purposes of the
          TheSuperMommy Platform Terms, you and TheSuperMommy shall be and act independently and not
          as partner, joint venturer, agent, employee or employer of the other. You don’t have any
          authority to assume or create any obligation for or on behalf of TheSuperMommy, express or
          implied, and you must not attempt to bind Instagram to any contract. • Also note that User
          Content is owned by users and not by TheSuperMommy. All rights not expressly granted to
          you are reserved by TheSuperMommy.
        </p>
        <p>
          Invalidity of Specific Terms: If any provision of the TheSuperMommy Platform Terms is
          found by a court of competent jurisdiction to be invalid, the parties nevertheless agree
          that the court should endeavor to give effect to the parties’ intentions as reflected in
          the provision and that the other provisions remain in full force and effect.
        </p>
        <p>
          No Waiver of Rights by TheSuperMommy: TheSuperMommy’s failure to exercise or enforce any
          right or provision of the TheSuperMommy Platform Terms shall not constitute a waiver of
          such right or provision.
        </p>
        <p>
          All or partial advertising on this Website or App is managed by Playwire LLC. If Playwire
          publisher advertising services are used, Playwire LLC may collect and use certain
          aggregated and anonymized data for advertising purposes. To learn more about the types of
          data collected, how data is used and your choices as a user, please visit{" "}
        </p>
        <p>
          <Link
            className="text-blue-500"
            href="https://www.playwire.com/privacy-policy"
            target="_blank"
          >
            https://www.playwire.com/privacy-policy
          </Link>
        </p>
        <aside className="col-span-full">
          <div className="OUTBRAIN" data-widget-id="GS_1"></div>
        </aside>
      </div>
      <Outbrain />
    </main>
  );
};

export default Page;
