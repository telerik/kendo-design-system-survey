import './App.scss'

import Titles from './titles'
import Employment from './employment'

function App() {

  return (
    <>
      <section>
        <h1>State of Designer-Developer Collaboration 2024</h1>
        <h2>Survey Report</h2>
        <p>Whether you're on the development or design end of creating web applications, it's equally easy to lose track of the world beyond your daily work. Sometimes, it can be hard to break out of the silos our companies create for us, inadvertently or on purpose. However, the crossroads of design and development is a bustling, beautiful, and, yes, sometimes a bit of a bumpy place, and it is one worth visiting often for anyone looking to be a better and happier professional.</p>
        <p>We went deep into the findings of the State of Designer-Developer Collaboration 2024 survey and created a report that surfaces everything there is to learn about the relationship between designers and developers, including ideas for making it more efficient and satisfying. <b>To quote Figma's Front End Developer Research Report (Oct 2023), “The designer/developer relationship just might be the most important partnership in business today.”</b></p>
      </section>
      <section>
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
          <div><p>While 36% of engineers say designer-developer collaboration goes smoothly and without challenges...</p></div>
          <div><p>only 10% of designers would agree.</p></div>
        </div>
        <h3>The top three interventions your teams yearn for are:</h3>
        <ul>
          <li>For designers to be trained on the technical constraints developers work with.</li>
          <li>For developers to be brought into the design process earlier.</li>
          <li>For developers to learn more about the principles of design.</li>
        </ul>
        <p>For the folks that don't yet have a finished design system — better user experience, improved consistency and faster design to dev time are the top three reasons why they want one. And great news: <b>those are also the top three benefits listed by folks who do have them!</b></p>
      </section>
      <section className='methodology'>
        <h2>Methodology</h2>
        <p>The State of Designer-Developer Collaboration 2024 survey was conducted through an online self-completion questionnaire. The questionnaire consisted of pre-defined questions exploring the designer-developer collaboration process and design system creation and adoption with their related challenges and benefits.</p>
        <p>The target audience for the survey was everyone involved in the design and development of web applications.</p>
        <p>Respondents were invited to take the survey through various channels—being prompted on the telerik.com website, through social media and blog post promotion, and through paid promotion in newsletters and on social media.</p> 
        <p>The survey was open for submissions for the period July 18 - September 08, 2024.</p>
        <p>We received a total of 467 responses from 51 countries. Before proceeding with the analysis, we cleaned and validated data for accuracy and relevance using both targeted survey distribution and screening questions to filter out respondents outside our target group and bots. We also learned that bots taking surveys are getting more and more advanced, leaving AI-generated feedback on open-ended questions. After the clean-up, we ended up with 222 respondents.</p>
        <div>
          <h3>Note on the Data</h3>
          <p>All results published here have been tested for statistical significance—and passed.</p>
          <p>If the sum of all responses is more than 100%, the question was multiple-choice. </p>
        </div>
        <div>
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
      </section>
      <section>
        <h2>Participants</h2>
        <p>The survey invitation specifically recruited people who were:</p>
        <ul>
          <li>Web designers or developers</li>
          <li>Stakeholders in the designer-developer handoff (e.g. managers, product owners, senior leadership)</li>
        </ul>
        <p>Anyone who selected a role outside this scope exited the survey.</p>
        <p>While the responses we got are skewed (82% of respondents were on the engineering side vs. 14% on the design side), the sample is large enough to give us valuable insights. </p>

        <h3>Would you describe yourself as...</h3>
        <Titles/>

        <p>The majority of respondents were full-time employees.</p>
        <p>One interesting difference between developer and designer roles is that while 18% of all engineering roles reported being self-employed, only 7% of designers did. What's more, while 20% of developers chose the “solo entrepreneur” label, none of the designers did. </p>
      <Employment/>

      </section>
    </>
  )
}

export default App
