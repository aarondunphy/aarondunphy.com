import React from "react"
import Heading from "../components/Heading"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProjectPage = () => {
    return (
        <Layout>
            <Seo title="Projects" />
            
            <div className="container">
              <Heading level={1} style={{marginBottom: "40px"}}>Projects I've Worked On</Heading>

              <div class="flex flex-col gap-10">
                
                <Heading level={2} style={{marginBottom: "0px"}}>Side Projects</Heading>
                
                <div className="flex flex-col md:grid md:grid-cols-2 gap-8 mb-12 md:mb-20">

                    <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
                        <Heading level={3} style={{marginBottom: "0px"}}>My Website</Heading>
                        <p className="text-sm">React - Gatsby - Tailwind CSS</p>
                        <div class="flex justify-between items-center gap-4 mt-4">
                            <a href="https://aarondunphy.com/" target="_blank" className="text-indigo-700 hover:text-violet-500">View App</a>
                            <a href="https://github.com/aarondunphy/aarondunphy.com" target="_blank" className="text-indigo-700 hover:text-violet-500">View Code</a>
                        </div>
                    </div>

                    <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
                        <Heading level={3} style={{marginBottom: "0px"}}>Weather App</Heading>
                        <p className="text-sm">React - TypeScript - Netlify Serverless Functions - Meta Weather API</p>
                        <div class="flex justify-between items-center gap-4 mt-4">
                            <a href="https://aaron-weather-app.netlify.app/" target="_blank" className="text-indigo-700 hover:text-violet-500">View App</a>
                            <a href="https://github.com/aarondunphy/weather-app" target="_blank" className="text-indigo-700 hover:text-violet-500">View Code</a>
                        </div>
                    </div>

                    <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
                        <Heading level={3} style={{marginBottom: "0px"}}>Notes App</Heading>
                        <p className="text-sm">React - JavaScript</p>
                        <div class="flex justify-between items-center gap-4 mt-4">
                            <a href="https://ajd-notes.netlify.app/" target="_blank" className="text-indigo-700 hover:text-violet-500">View App</a>
                            <a href="https://github.com/aarondunphy/notes-app" target="_blank" className="text-indigo-700 hover:text-violet-500">View Code</a>
                        </div>
                    </div>

                    <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
                        <Heading level={3} style={{marginBottom: "0px"}}>Golf Scorecard</Heading>
                        <p className="text-sm">React - JavaScript</p>
                        <div class="flex justify-between items-center gap-4 mt-4">
                            <a href="https://golf-scorecard.netlify.app/" target="_blank" className="text-indigo-700 hover:text-violet-500">View App</a>
                            <a href="https://github.com/aarondunphy/golf-scorecard-react" target="_blank" className="text-indigo-700 hover:text-violet-500">View Code</a>
                        </div>
                    </div>

                    <div className="rounded shadow-gray-400 shadow-lg p-6 border border-gray-100">
                        <Heading level={3} style={{marginBottom: "0px"}}>Naughts &amp; Crosses</Heading>
                        <p className="text-sm">React - JavaScript</p>
                        <div class="flex justify-between items-center gap-4 mt-4">
                            <a href="https://naughts-and-crosses.netlify.app/" target="_blank" className="text-indigo-700 hover:text-violet-500">View App</a>
                            <a href="https://github.com/aarondunphy/naughts-and-crosses" target="_blank" className="text-indigo-700 hover:text-violet-500">View Code</a>
                        </div>
                    </div>

                </div>
                
                <Heading level={2} style={{marginBottom: "0px"}}>Commerical</Heading>

                <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
                      <div className="w-full md:w-1/3">
                          <Heading level={3} style={{marginBottom: "0px"}}>Rocket CMS</Heading>
                          <p className="text-xl mb-0">Bespoke Headless CMS</p>
                          <p className="text-sm">Laravel - PHP - JavaScript - TypeScript - React - Vue - MySQL GraphQL - Queues - Horizon - APIs - Jest - Storybook - Tailwind CSS</p>
                          <p className="text-xs mb-0">Built whilst working at <a href="https://kafe.rocks" target="_blank" className="text-indigo-700 hover:text-violet-500">KaFe Rocks</a></p>
                      </div>
                      <div className="w-full md:w-2/3">
                          <p>At KaFe Rocks the company needed a new central CMS to replace their existing systems that were split between a bespoke Zend application and WordPress sites. When I joined I was part of a small team that started work on this greenfield project, we were tasked with building a bespoke headless CMS that can power any frontend such as Gatsby or Next.js. The CMS provides an API for the frontend via GraphQL, the UI is built in Vue.js following the MVC pattern with Laravel and has a lot of bespoke features that help give the company a competitive advantage.. The frontend is built in Gatsby, React and TypeScript and when built via BitBucket pipelines is hosted on Cloudflare worker sites.</p>
                      </div>
                  </div>

                  <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
                    <div className="w-full md:w-1/3">
                        <Heading level={3} style={{marginBottom: "0px"}}>Purrple</Heading>
                        <p className="text-xl mb-0">Business Management System</p>
                        <p className="text-sm">Laravel - PHP - JavaScript - Vue.js - MySQL - Queues - Horizon - APIs</p>
                        <p className="text-xs mb-0">Built whilst working at <a href="https://purrgroup.com" target="_blank" className="text-indigo-700 hover:text-violet-500">Purr Digital</a></p>
                        <p className="text-xs mb-0"><a href="https://purrgroup.com/portfolio/products/purrple/" target="_blank" className="text-indigo-700 hover:text-violet-500">View more info on Purrple</a></p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p>Purrple is an internal business management system built for Purr Digital that acts as the single source of data entry to manage jobs whilst talking to many third party systems throughout a job's lifecycle such as Harvest, Freeagent, Capsule, Asana, Slack, Hello Sign and TimeTastic. This saves the company a lot of time and accuracy from not having to update various systems all the time.</p>
                        <p>The system also handles a lot of project management and human resources tasks such as weekly time reports, retainer reporting, performance reviews, holiday and training management. With being able to bring all of this data together Purr are able to provide detailed reporting on how the business has been financially at different periods and also predict future financials.</p>
                    </div>
                </div>

                <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
                    <div className="w-full md:w-1/3">
                        <Heading level={3} style={{marginBottom: "0px"}}>iGiving</Heading>
                        <p className="text-xl mb-0">Fundraising Platform</p>
                        <p className="text-sm">Laravel - PHP - JavaScript - Vue.js - MySQL - Payment Merchant API</p>
                        <p className="text-xs mb-0">Built whilst working at <a href="https://purrgroup.com" target="_blank" className="text-indigo-700 hover:text-violet-500">Purr Digital</a></p>
                        <p className="text-xs mb-0"><a href="https://purrgroup.com/portfolio/products/igiving/" target="_blank" className="text-indigo-700 hover:text-violet-500">View more info on iGiving</a></p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p>iGiving is a fundraising platform that has taken over $500,000 and was needed to be an MVP to get to market but at the same time allow an admin at iGiving and Choose a Challenge to manage all donations, fundraisers, events and charities. Payout and donation reports can be generated for charities whilst fundraisers and charities also receive automatic weekly email updates on amounts raised.</p>
                        <p>API endpoints were created so fundraisers who sign up on Choose a Challenge will automatically have a fundraiser page created on iGiving too.</p>
                    </div>
                </div>

                <div className="flex-col flex gap-8 mb-12 md:mb-20 md:flex-row">
                    <div className="w-full md:w-1/3">
                        <Heading level={3} style={{marginBottom: "0px"}}>Social Pops</Heading>
                        <p className="text-xl mb-0">Social Media User Content Video Generator</p>
                        <p className="text-sm">Laravel - PHP - JavaScript - Vue.js - FFmpeg</p>
                        <p className="text-xs mb-0">Built whilst working at <a href="https://purrgroup.com" target="_blank" className="text-indigo-700 hover:text-violet-500">Purr Digital</a></p>
                        <p className="text-xs mb-0"><a href="https://purrgroup.com/portfolio/products/social-pops/" target="_blank" className="text-indigo-700 hover:text-violet-500">View more info on Social Pops</a></p>
                    </div>
                    <div className="w-full md:w-2/3">
                        <p>Social Pops is a platform for charities to be able to generate personalised videos to send to their fundraisers, for them to be able to share on social media and boost their fundraising.</p>
                        <p>A charity admin can log in to create an event(s), import a CSV file of their fundraisers (first name and fundraising URL), upload photo, video and audio assets and then click a button to generate all of the personalised videos. With a fundraising URL supplied, we are able to talk to third party systems such as Virgin Money Giving and JustGiving to get their photo and fundraising amounts to date.</p>
                        <p>Personalised videos are generated by combining the supplied assets and using FFmpeg and ImageMagick to convert, merge, manipulate and combine them into one output video file. The processing for this is managed with Laravel Horizon and a Redis queue due to the strain, length and complexity of generating these videos. All assets are stored on AWS S3.</p>
                    </div>
                </div>

              </div>
          </div>

        </Layout>
    )
}

export default ProjectPage