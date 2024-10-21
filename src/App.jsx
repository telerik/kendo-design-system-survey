import './App.scss'

//KR Components
import { Button } from "@progress/kendo-react-buttons";

//Charts
import Titles from './titles'
import Employment from './employment'
import Location from './location'
import Experience from './experience';
import CompanySize from './companysize';
import Description from './describe';
import Industry from './industry';
import InternalExternal from './internal-external';
import ProjectNumber from './project-number';
import DesignerNumber from './designer-number';
import DeveloperNumber from './developer-number';
import OutsideHelp from './outside-help';

//Images
import logo from './assets/progress-telerik-black.svg'
import screen from './assets/screen.svg'
import wheel from './assets/wheel.svg'
import design from './assets/design-comp.svg'
import dots from './assets/dots.png'
import ninjaKendoka from './assets/ninja-kendoka.svg'
import info from './assets/info.svg'

function App() {

  return (
    <>
    <section className='intro'>
      <div className='cover' style= {{backgroundImage: `url(${dots})`, backgroundSize: 'cover'}}>
      <img className='logo' src={logo}/>
        <div>
          
          <div className='illustration'>
            <img className='wheel' src={wheel}/>
            <img className='screen' src={screen}/>
            <img className='design' src={design}/>
          </div>
          <h1>State of <br/> Designer-Developer<br/> Collaboration 2024</h1>
        </div>
      </div>
      <div className='text'>
        <h4>Survey Report</h4>
        <hr/>
        <p>Whether you're on the development or design end of creating web applications, it's equally easy to lose track of the world beyond your daily work. Sometimes, it can be hard to break out of the silos our companies create for us, inadvertently or on purpose. However, the crossroads of design and development is a bustling, beautiful, and, yes, sometimes a bit of a bumpy place, and it is one worth visiting often for anyone looking to be a better and happier professional.</p>
        <p>We went deep into the findings of the State of Designer-Developer Collaboration 2024 survey and created a report that surfaces everything there is to learn about the relationship between designers and developers, including ideas for making it more efficient and satisfying. <b>To quote Figma's Front End Developer Research Report (Oct 2023), “The designer/developer relationship just might be the most important partnership in business today.”</b></p>
      </div>
    </section>
    <main>
        <section className='toc'>
        <h2>Jump to Section:</h2>
        <ol>
          <li><a>Highlights</a></li>
          <li><a>Methodology</a></li>
          <li><a>Participants</a></li>
          <li><a>Collaboration & Implementation</a></li>
          <li><a>Design Systems</a></li>
          <li><a>Conclusion</a></li>
        </ol>
      </section>
      

      <section className='highlights'>
        <h2>Highlights</h2>
        <div className='flex'>
          <div className='callout'><p>While <b style={{fontSize: '30px'}}>36%</b> of engineers say designer-developer collaboration goes smoothly and without challenges...</p></div>
          <div className='callout' style={{backgroundColor: '#ffcf79ff'}}><p>only <b style={{fontSize: '30px'}}>10%</b> of designers would agree.</p></div>
        </div>

        <div className='imgFlex'>
       
          <img src={ninjaKendoka} className='decoImage'/>
      
          <div>
            <h3>The top three interventions your teams yearn for are:</h3>
            <ul>
              <li>For designers to be trained on the technical constraints developers work with.</li>
              <li>For developers to be brought into the design process earlier.</li>
              <li>For developers to learn more about the principles of design.</li>
            </ul>
            <p>For the folks that don't yet have a finished design system — better user experience, improved consistency and faster design to dev time are the top three reasons why they want one. And great news: <b>those are also the top three benefits listed by folks who do have them!</b></p>
          </div>
        </div>
        
      </section>

      <section className='methodology'>
        <h2>Methodology</h2>
        <p>The State of Designer-Developer Collaboration 2024 survey was conducted through an online self-completion questionnaire. The questionnaire consisted of pre-defined questions exploring the designer-developer collaboration process and design system creation and adoption with their related challenges and benefits.</p>
        <p><b>The target audience for the survey was everyone involved in the design and development of web applications.</b></p>
        <p>Respondents were invited to take the survey through various channels—being prompted on the telerik.com website, through social media and blog post promotion, and through paid promotion in newsletters and on social media.</p> 
        <p>The survey was open for submissions for the period July 18 - September 08, 2024.</p>
        <p>We received a total of 467 responses from 51 countries. Before proceeding with the analysis, we cleaned and validated data for accuracy and relevance using both targeted survey distribution and screening questions to filter out respondents outside our target group and bots. We also learned that bots taking surveys are getting more and more advanced, leaving AI-generated feedback on open-ended questions. After the clean-up, we ended up with 222 respondents.</p>
        <div className='imgFlex'>
          <div className='callout'>
            <img className='infoIcon' src={info}/>
            <h3>Note on the Data</h3>
            <p>All results published here have been tested for statistical significance—and passed.</p>
            <p>If the sum of all responses is more than 100%, the question was multiple-choice. </p>
          </div>
          <div className='callout'>
           <img className='infoIcon' src={info}/>
            <h3>Note on the Wording</h3>
            <p>Whenever we look at the differences between designer and development roles, we'll refer to them as “design/designers” and “development/developers/engineers/dev” for short. The job roles are grouped in these two categories in the following way: </p>
            <table>
              <tr>
                <th>Designer Roles</th>
                <th>Developer Roles</th>
              </tr>
              <tr>
                <td>Design (UI/UX) manager</td>
                <td>CEO/CTO/VP of engineering</td>
              </tr>
              <tr>
                <td>Design system lead</td>
                <td>Engineering manager</td>
              </tr>
              <tr>
                <td>Graphic designer</td>
                <td>Front-end developer</td>
              </tr>
              <tr>
                <td>Interaction designer</td>
                <td>Full-stack developer</td>
              </tr>
              <tr>
                <td>Product designer</td>
                <td>Product manager</td>
              </tr>
              <tr>
                <td>UI/UX designer</td>
                <td>Web developer</td>
              </tr>
            </table>
          </div>
        </div>
      </section>

      <section>
        <h2>Participants</h2>
        <div className='chartFlex'>
          <div className='text'>
          <p>The survey invitation specifically recruited people who were:</p>
          <ul>
            <li>Web designers or developers</li>
            <li>Stakeholders in the designer-developer handoff (e.g. managers, product owners, senior leadership)</li>
          </ul>
          <p>Anyone who selected a role outside this scope exited the survey.</p>
          <p>While the responses we got are skewed (82% of respondents were on the engineering side vs. 14% on the design side), the sample is large enough to give us valuable insights. </p>

        </div>
        <div className='chartWrapperDark'>
          <h3>Would you describe yourself as...</h3>
          <Titles/>
        </div>
        </div>

        <div className='chartFlex'>
          <div className='chartWrapperLight'>
            <h3>Are you...</h3>
            <Employment/>
          </div>
          <div className='text'>
            <p>The majority of respondents were full-time employees.</p>
            <p>One interesting difference between developer and designer roles is that while 18% of all engineering roles reported being self-employed, only 7% of designers did. What's more, while 20% of developers chose the “solo entrepreneur” label, none of the designers did. </p>
          </div>
      </div>
      </section>
      <section>
        <h2>Geography</h2>
        <p>We received responses from 50 different countries spread across six continents. </p>

        <h3>In which country do you currently reside?</h3>
        <Location/>
      </section>

      <section>
        <h2>Experience</h2>
        <p>Age is but a number; you could be 60 and just starting on a new career path. That's why, instead of age, we asked for the respondents' years of experience. A majority (54%) of respondents have 11+ years in the software development industry, and 27% have been at it for 5 years or less.  </p>
        <div className='chartWrapperLight'>
          <h3>How long have you been involved in the software development industry? </h3>
          <Experience/>
        </div>
      </section>

      <section>
        <h2>The Businesses</h2>
        <div className='chartFlex'>
          <div>
            <p>The survey represents the full spectrum, from one-person businesses to small and medium-sized companies and enterprises with 5,000+ employees.</p>
            <p>30% of all respondents work in large enterprises of 500+ employees, while 41% work in small businesses of 2-100 employees.</p> 
            <p>The largest share of respondents (31%) work at companies whose focus is not on software development (e.g. a manufacturer or an educational institution), and 22% work for independent software vendors.</p> 
          </div>
          <div className='chartWrapperDark'>
            <h3>What is the total number of employees in your company? </h3>
            <CompanySize/>
          </div>
        </div>
        
        <div className='doubleChartFlex'>
          <div className='chartWrapperDark'>
            <h3>Which of the below best describes your company? </h3>
            <Description/> 
          </div>
          <div className='chartWrapperDark'>
          <h3>In which industry does your company operate?</h3> 
          <p><i>(Only people who selected “The focus of my company is not development-related” to the previous question were asked)</i></p> 
          <Industry/>
        </div>
        </div>
      
       
        
        <p>People working in over 20 different industries took the survey. <b>Education, government, finance, manufacturing and healthcare</b> were the most represented ones.</p>
        
        
      </section>

      <section>
        <h2>Work Type</h2>
        <div className='doubleChartFlex'>
          <div>
            <h3>What kind of web apps are you currently working on? </h3>
            <InternalExternal/>
          </div>
          <div>
            <h3>How many different projects/products do you usually work on in one full year? </h3>
            <ProjectNumber/>
          </div>
        </div>
  
   
      </section>

      <section>
        <h2>Team Composition</h2>
        <p>The more, the merrier, the saying goes—but is that so when it comes to team composition? The most prevalent team model involves 2-5 developers and 1 designer. This aligns with the ratio that zeroheight saw in their <a href="https://19492330.fs1.hubspotusercontent-na1.net/hubfs/19492330/Community%20and%20Content/How%20We%20Document/HowWeDocument-2024.pdf">Design Systems Report 2023</a>, where they saw ranges between 1:6 and 1:15 depending on company size.</p>
        <p>One in four developers we surveyed doesn't have a designer assigned to their current project. Often, this means that developers are leveraging resources with design “built-in” and making minimal UI changes. This could include <a href="https://www.telerik.com/?utm_medium=pdf&utm_source=telerik&utm_campaign=dt_ar_design_dev_collab_report">UI component libraries</a> or pre-existing design systems such as Material or Fluent. For specific design needs, these groups may hire a freelancer or contract worker to help with a one-off design project (read on for more insight on this). Generally, we see this kind of setup in startups, small businesses or other similarly under-resourced ventures. As businesses (and userbases) grow, so does the need for a dedicated designer.</p>

        <h3>How many designers are working on your current project/product? </h3>
        <div className='chartWrapperDark'>
           <DesignerNumber/>
        </div>

        <p>On the design side, 17% have just one developer they partner with on their current project and 51% work with 2-5 developers.</p>

        <h3>How many developers are working on your current project/product? </h3>
        <div className='chartWrapperDark'>
          <DeveloperNumber/>
        </div>

        <p>When it comes to hiring outside help, most companies seem reluctant — 72% count exclusively on their internal specialists to get the job done.</p>
        <p>A small share of developers (5%), versus none of the designers, report that their companies don't do any design/development work internally.</p>

        <h3>When you have a project/product that involves both design and development work what's your approach? </h3>
        <OutsideHelp/>
      </section>

      <section>
        <h2>Designer-Developer Collaboration </h2>
        <p>Almost half of respondents report having a regular communication rhythm, with 46% of all teams collaborating daily — or at least a few times a week. However, 4% of collaborating designers and developers never communicate directly; rather, they use a mediator. A further 7% collaborate very rarely — just once a month or less! </p>

        <h3>How often are designers and developers usually collaborating on a single project/product? </h3>
        {/* TO-DO: Collaboration Chart */}

        <p>On average, each professional uses 2.3 different communication channels. Happily, 64% of them opt for synchronous one-on-one conversations—either in person or by getting on a call. Team meetings (53%) come in a close second place, followed by messaging and email (51%). Two free-form responses saying they use Azure Dev Ops to communicate piqued our curiosity. That's unique, isn't it? But our favorite response to this question is definitely: “The developers are the designers at our company thru [sic] direction of the IT Manager.” We feel you, folks. We feel you. </p>

        <h3>Which communication channels do designers and developers at your company use most frequently?</h3>
        {/* TO-DO: CommunicationMethod Chart */}
      </section>

      <section>
        <h2>The Good and the Bad </h2>
        <p>The good news is that 33% of respondents feel satisfied with their design-to-development process—that's every third person! The bad news is that at least 65% experience challenges (we say at least because many of the free-form responses in the “Other” category also spoke about challenges).</p>
        <p>And now we will find out why making sure that designers and developers collaborate well is business-critical: </p>
        <blockquote>The price many businesses pay for not establishing a smooth design-to-development process is slow time to market. </blockquote>
        <p>Slow time to market is the price 28% of companies pay, but that's not all. 17% of teams suffer from internal conflict—and we all know that conflict at work is often resolved by people leaving the team or company. That, in turn, leads to all sorts of gnarly complications. </p>
        <p>The third most prevalent consequence is low quality of delivery (14%). Some companies may be able to weather this (for a time), but for others, it's a death knell. </p>

        <h3>What are the main challenges in the design-to-development process in your company? </h3>
           {/* TO-DO: Challenges Chart */}
      </section>

      <section>
        <h2>A "Developers are from Saturn, Designers from Neptune" Kind of Situation </h2>
        <p>Now it's time to open Pandora's Box and look at the split responses of designers and developers. While 36% of engineers say the designer-developer collaboration goes smoothly and without challenges, only 10% of designers would agree.</p> 
        <p>Developers are 50% more likely to experience challenges around slow time-to-market, while designers are more than twice as likely to be concerned about low quality of delivery. Unfortunately, we didn't include designers' main concerns among the options we listed—52% of designers opted for "Other." Among the free-form responses (modified for clarity):</p>
        <ul>
          <li>“Insufficient understanding from higher management”</li>
          <li>“Siloed communications” </li> 
          <li>“At times the implementation does not reflect the design”</li>
          <li>“Lack of communication between DEV team and UI/UX designer after initial hand-off to Dev team results in Devs making design decisions that negatively impact the UX”</li>
          <li>“Poor project specifications (e.g. unaddressed limitations)” </li>
          <li>“Skills not up to date” </li>
          <li>“When the company hires an external agency, the internal developers have a tough time reaching out to the external designers as they rarely communicate” </li>
        </ul>  
        <p>27% of all respondents report a perfect relationship between design and development on their project (a rating of 9 or 10 on a 10-scale). A further 45% are quite satisfied (a rating of 7 or 8).  </p>
        <p>The “meh” zone is also significant, with 22% going for a 5 or a 6. Sounds innocent enough, but if your partner gave your relationship a 5 or a 6, you'd be on high alert, wouldn't you? </p>
        <p>Just 6% rate their relationship as bad (3 or 4) and no one is in the “complete breakdown” zone. Phew! (And yes, we're all thinking it: those folks do exist, but they are probably way too busy struggling to have time for a survey). </p>

        <h3>If 10 is a perfectly functioning relationship with nothing to add and 1 is a complete breakdown where no one talks to the other, how would you rate the relationship between designers and developers working on the same project? </h3>
        {/* TO-DO: Relationship Chart */}
      </section>

      <section>
        <h2>A Chat a Week Keeps the Designer-Developer Relationship at Its Peak </h2>
        <p>If daily catchups seem excessive, don’t worry – once a week may be the sweet spot for collaboration.  69% of respondents who chat once per week report that their relationship is positive (7 or higher) and only 7% rate their relationships as poor. </p>

        <h3>How often do you communicate with your partner?</h3>
         {/* TO-DO: Communication Chart */}

        <h3>Finish the sentence to reflect your thoughts: "I think the relationship between designers and developers would be smoother if..." </h3>
        <p><i>(question only appeared to respondents who rated their relationship 6 or lower) </i></p>
        {/* TO-DO: RelationshipImprovement Chart */}

        <p>We also followed up with those who rated their relationship 7 or higher and asked them what they thought worked so well. Sneakily, we gave them the same options as the folks who rated it low. As expected, the results are mirror images. What people in poor relationships crave for is what those in good relationships give credit to for their success. </p>
        <h3>What are the key factors to good collaboration between designers and developers? </h3>
        <p><i>(question only appeared to respondents who rated their relationship 7 or higher)</i></p>
        {/* TO-DO: GoodRelationship Chart */}

        <p>What's the cost of inaction, you ask? So did we.</p>
        <p>The top three reported responses about easing the designer-developer relationship all had to do with developers learning more about the goals and processes of their designer counterparts. Whether that's understanding the tools designers are using, the reason why they're making certain design decisions or just becoming an active participant in the design process, it all (clearly) adds up — in this case, to over 50% of issues! </p>

        <h3>What is the cost to your business from the existing collaboration issues between designers and developers? </h3>
         {/* TO-DO: Cost Chart */}

         <p>Now the design-development divide in responses hints at some interesting dynamics. Unfortunately, the design side of the data is not statistically significant as many of them had dropped off by this point in the survey. However, it's still super interesting to consider the differences that popped up (consider this anecdotal evidence): </p>

         <ul>
          <li>Many more developers than designers thought bringing in developers into the design process earlier would help.</li>
          <li>Designers and developers both think the other should level up their knowledge of the other side.</li>
          <li>Designers seem much more convinced that the issues come from misaligned timelines.</li>
         </ul>

         <p>An insightful free-form response we got: </p>
         <blockquote>“The design tools don't produce things that are usable (…) in the dev tools” </blockquote>
        <p>This is a problem we've recognized that many, many teams have. We spoke to lots of them and devised a solution. <a href="https://www.telerik.com/ui-customization-tools?utm_medium=pdf&utm_source=telerik&utm_campaign=dt_ar_design_dev_collab_report">Learn more</a> about how our family of design- and developer-friendly tools give developers and designers a common language and bridge the gap.</p>
      </section>

      <section>
        <h2>Tooling</h2>
        <p>Now, for the extra fun part—because who doesn't love to geek out about all the cool tools available for design and dev work these days?</p>

        <h3>Which design-to-code tools are you currently using?</h3>
        {/* TO-DO: Tools Chart */}

        <p>As expected, we saw some fan favorites in here: Figma and <a href="https://www.telerik.com/themebuilder/?utm_medium=pdf&utm_source=telerik&utm_campaign=dt_ar_design_dev_collab_report">Progress ThemeBuilder</a>. But perhaps most surprising was the significant portion (52%) of respondents who aren't using anything at all! Design to code is a longstanding problem that many have tried to find automated solutions for, pretty much since the dawn of the internet—with varying levels of success. One respondent did specifically mention they are still using Dreamweaver, which...hey, if it's working for you, godspeed. Clearly, though, this is still a space that's ripe for innovation and new methods of problem-solving for our modern era of app design and development.</p>

        <h3>How satisfied are you with the output of your design-to-code tool? </h3>
        {/* TO-DO: SatisfiedTooling Chart */}

        <p>We were also curious what designers were building with their tools, so we asked about the complexity of their prototypes. Most are building highly interactive interfaces—with a smaller percentage sticking to static designs only.</p>

        <h3>How complex are your prototypes? </h3>
         {/* TO-DO: Complexity Chart */}

         <p>But, of course, the million-dollar question is whether or not they're <i>happy</i> with the finished product. While most are okay with their internal processes, unfortunately only about 1 in 4 are satisfied with the finished work—the rest feel it's not good enough or just “passable.” </p>

         <h3>Are you satisfied with the design handoff for your project/product? </h3> 
          {/* TO-DO: SatisfiedHandoff Chart */}

         <h3>Are you satisfied with the way design is implemented? </h3>
         {/* TO-DO: SatisfiedDesign Chart */}

         <p>When we dig into why there’s dissatisfaction, it seems to boil down to two main pain points: lack of clarity in the initial doc/file leading to lots of follow-up questions (50%) and changing requirements on the design side (65%). </p>

         <h3>Why not? </h3>
         {/* TO-DO: NotSatisfiedDesign Chart */}

         <p>Other interesting open-response answers from this section included, “Accessibility issues are often overlooked” and “Designs just don't work in the real world”—both cases where something that looks great “on paper” just doesn't quite align with the practical requirements.</p>
         <p>Speaking of version control, we asked folks about how that looks for them on both the design and dev side of things. </p>

         <h3>Do you have version control (version history) for your project/product? </h3>
         {/* TO-DO: VersionControl Chart */}

         <p>As noted earlier, pretty much everyone is using version control for their software...but it's a little more hit-or-miss on the design side, where that's a (relatively) newer concept. At least, assuming we're talking about something a little more standardized than the infamous “design_file_v2_FINAL_FINAL_FINAL_NO_REALLY” naming systems that almost every one of us has been guilty of at some point in our lives.</p>
      </section>

      <section>
        <h2>Implementation </h2>
        <p>No matter what tools we're using to get there, the end goal is a beautiful and functional finished application or website. While that's awfully easy to type, it is much harder to accomplish. So, let's look at what goes into getting from concept to production.</p>
        <p>First, who gets to have a say in how the design is implemented? The results show a fairly even split between designers, developers, and product managers—with just a handful including marketing as well.  </p>

       <h3>Who gets to have a say in how the design is implemented? </h3>
        {/* TO-DO: Implementation Chart */}
      </section>

      <section>
        <h2>Design Systems  </h2>
        <p>For our final section, of course we would be remiss if we talked about the designer-developer relationship and didn't ask about design systems. After all, a true design system is a blend of both worlds: a place where design and dev naturally overlap. We don't think there's been either a design or development conference in the last decade where there hasn't been at least one talk about design systems. Let's dig in:  </p>

        <h3>First, the obvious: do you have a design system? </h3>
        {/* TO-DO: DesignSystem Chart */}

        <h3>How long have you had a design system in place? </h3>
        {/* TO-DO: DesignSystemAge Chart */}

      <p>About half of all respondents did—whether it was one they had just started or a more mature and established system. Of those who didn't, about one-third were planning to create one in the future. </p>

      <h3>What is your approach when creating a design system? </h3>
        {/* TO-DO: DesignSystemApproach Chart */}

      <p>Of the folks that had or were planning to create a design system, most were working from the basis of a larger, established design system (like Material Design or Fluent). This makes a ton of sense — after all, why reinvent the wheel?</p>
      <p>Naturally, we were also curious about each respondent's role in shaping and using their design systems.  </p>

      <h3>What was your role in creating the design system you have in place currently? </h3>
        {/* TO-DO: DesignSystemRole Chart */}

      <h3>How often do you use the design system you have in place currently? </h3>
        {/* TO-DO: DesignSystemUse Chart */}

      <h3>Who decided that you'll be creating an internal design system? </h3>
        {/* TO-DO: DesignSystemCreation Chart */}

      <p>Most folks who made it this far in the survey were either direct contributors or consultants in some way to the creation of the system (whether that was in the past or actively ongoing), with 23% not involved at all. Similarly, most of the respondents with established design systems used them regularly in their day-to-day work, with only 6% not using them. However, when it came to who got the final say on design system creation, it was overwhelmingly the design leads — with almost half of respondents saying that the Design Lead or Design System Lead was the one who decided to create the system.  </p>

      <h3>Do you think your company or business unit would benefit from adopting a design system? </h3>
        {/* TO-DO: DesignSystemBenefit Chart */}

      <p>For those without a design system, the vast majority (about 80%) felt like it would either somewhat or definitely benefit them to adopt one. However, we all know that's easier said than done... </p>
      </section>

      <section>
        <h2>Design System Challenges & Benefits </h2>
        <p>This next set of questions sheds some light on the primary inhibitors to design system creation. While resource dedication (time, energy, finances, etc.) all play a role, lack of buy-in at the management level was reported as the primary factor standing in the way.  </p>

        <h3>Why don't you have a design system in place if you think your company would benefit from it?</h3>
        {/* TO-DO: DesignSystemBlockers Chart */}

        <h3>Which of these factors impacted the adoption and usage of design system the most in your company? </h3>
        {/* TO-DO: DesignSystemAdoption Chart */}

        <p>Of course, once you've cleared the hurdle of creating the design system, that doesn't mean it's all sunshine and roses. There are different pain points when we're talking about adopting a design system. For our respondents, the biggest struggles were getting design and dev aligned and establishing clear processes — things that naturally go together. After that, documenting everything and proving ROI were the next biggest challenges.  </p>

        <h3>What are the main challenges in the process of creating a design system? Select all that apply.</h3>
        {/* TO-DO: DesignSystemCreationChallenge Chart */}

        <h3>What are the main challenges of maintaining a design system? Select all that apply.</h3>
        {/* TO-DO: DesignSystemMaintenanceChallenge Chart */}

        <p>Now, it's not all bad—after all, if it was, nobody would bother. A design system requires significant upfront time and energy (and no small amount of maintenance afterwards), but it pays back those investments in spades.  </p>

        <h3>What are your top 3 goals in creating a design system?</h3>
        {/* TO-DO: DesignSystemGoals Chart */}

        <h3>What are the top 3 benefits of having implemented a design system in place?</h3>
        {/* TO-DO: DesignSystemImplementedBenefits Chart */}

        <h3>What is the general feeling in your team regarding the adoption/usage of design systems?</h3>
        {/* TO-DO: DesignSystemFeelings Chart */}

        <p>Even better, the results show that expectations are matched by results in many cases. For the folks that don't yet have a finished design system — better user experience, improved consistency and faster design to dev time are the top 3 reasons why they want one. And great news: those are also the top 3 benefits listed by folks who do have them! It's reassuring to see that expectations and results are aligned regarding the power and impact of a design system.  </p>

        <p>Overall, about half of users felt that design systems solved their problems, and the other half felt that it solved some problems but also created some new ones. Only 3% of users felt that it was a net negative, creating too many issues to be worthwhile. It's always reassuring to see that such a huge project isn't just wishful thinking; it does have real, tangible benefits.  </p>
      </section>

      <section>
        <h2>Design System Tools and Maintenace</h2>
        <p>When it comes to maintenance and continued contributions to the design system, our survey found that there are two main approaches: everyone contributes equally or a dedicated design system team owns the system.  </p>

        <h3>Who's responsible for maintaining and/or contributing to the design system in your company? Select all that apply.</h3>
        {/* TO-DO: DesignSystemMaintenance Chart */}

        <p>When it comes to tooling, we see some familiar old favorites made an appearance again: Figma and Visual Studio/VS Code. Axure was a common write-in — we'll make sure to include it next year — but otherwise, no real surprises here. </p>


        <h3>Which tools will you use for the creation of your design system? Select all that apply.</h3>
        {/* TO-DO: DesignSystemCreationTools Chart */}

        <h3>Which tools do you use for the maintenance of your design system? Select all that apply.</h3>
        {/* TO-DO: DesignSystemMaintenanceTools Chart */}

        <p>The other good news is that folks are, on balance, happy with those tools. While just over 40% feel that there’s room for improvement, only 12% are outright unhappy with their options. </p>

        <h3>Do you believe your team/company is using the tools that best enable designer-developer collaboration?</h3>
        {/* TO-DO: CollaborationTools Chart */}
      </section>

      <section>
        <h2>The Future of Design Systems </h2>
        <p>What’s a survey without a good predictions section? Let's see what folks are planning, excited for and thinking about with their design systems in the years ahead.</p>

        <h3>Are you experiamenting with AI in your design system</h3>
        {/* TO-DO: DesignSystemAI Chart */}

        <p>When it comes to AI in design systems, most folks are still feeling hesitant. Only 7% have implemented AI in their design system currently, and (from our open response follow-up question) they're primarily using GenAI to answer questions or create placeholder elements. 37% consider using AI to make suggestions, create templates or help brainstorm ideas.  </p>

        <h3>In a best-case scenario, what do you want for your company's design system in the future?</h3>
        {/* TO-DO: DesignSystemFuture Chart */}

        <p>Long term, most respondents are hopeful that their design system becomes an integral aspect of their internal design-to-development process, serving as a single source of truth that's continually updated and well-maintained. Only 6% are hoping to follow in the footsteps of giants and launch their design system for public use. To them, we wish the very best of luck and look forward to seeing what they create!  </p>
      </section>

      <section>
        <h2>Conclusion</h2>
        <p>When we look at these results compiled together, it's easy to feel optimistic about the future of designer/developer collaboration. Sure, there's work to be done—no doubt about it. But it's reassuring to see that none of the problems are insurmountable or unsolvable.</p>  
        <p>Many of the challenges hinge on communication: not speaking the same language, getting involved in the process too late, not checking in often enough, not clearly communicating expectations, not sharing a tool set. These aren't problems that will magically solve themselves. They require a commitment from both parties to work together towards bridging the gap. But as they say: “We have the technology. We have the capability...” </p>
        <p>If you're looking for ways to help improve the design to development flow at your job, check out the <a href='https://www.telerik.com/ui-customization-tools?utm_medium=pdf&utm_source=telerik&utm_campaign=dt_ar_design_dev_collab_report'>Telerik and Kendo UI tools.</a> Our Design System Kit, ThemeBuilder, Figma UI Design Kits, building blocks, page templates and 100+ beautiful, accessible UI components can help get everyone unified and working towards the same goal—faster and more smoothly than ever before. </p> 
        <p>And, of course, this isn't the end of the conversation. We'd love to hear from you! If there's something we left out, something you disagree with or just something that sparked an idea, we'd love to hear about it.  </p>
        <p>Keep working hard! We can't wait to hear about everything you've accomplished as designers and developers working together. </p>
        <p>Until next year,</p>
        <p>Kathryn & Nora </p>
      </section>

      <section>
        <h2>About Telerik and Kendo UI </h2>
        <p><i>UI component libraries that care about the design process </i></p>
        <p>The Telerik and Kendo UI component libraries and UI customization tools give developers and designers a common language. This toolkit removes many of the obstacles presented by the design-to-code process and significantly reduces tedious CSS, guesswork, and frustrating back and forth—and, ultimately, time to market. </p>
        <a href="https://www.telerik.com/ui-customization-tools?utm_medium=pdf&utm_source=telerik&utm_campaign=dt_ar_design_dev_collab_report"><Button>I want better designer-developer collaboration</Button></a>
      </section>
      </main>
    </>
  )
}

export default App
