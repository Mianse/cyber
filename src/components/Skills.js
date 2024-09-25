import React from 'react'
import './../assets'
import { skill } from './../assets'
import './../Constants'
import { AppText, skillsList, workDetail } from './../Constants'

const Skills = () => {
  return (
    <section id="skills">
    <div className="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="bg-blue-600 p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Here are some key expectations to keep in mind incyber security
            </h2>
  
            <p className="hidden text-white/90 sm:mt-4 sm:block">
            1. Rapidly Changing Environment
Continuous Learning: Cyber threats evolve quickly, so expect ongoing training and education for yourself and your team.
Adaptability: Be prepared to adjust strategies and tools to meet new challenges.

2. Client Relationships
Trust Building: Establishing trust with clients is crucial; they need to feel secure sharing sensitive information.
Communication: Regular updates and clear communication about risks and solutions are essential.

3. Technical Expertise
High Skill Requirements: Employees will need to have strong technical skills and possibly relevant certifications (e.g., CISSP, CEH).
Collaboration: Teamwork is vital, as projects often require diverse skill sets.

4. Compliance and Regulations
Understanding Legal Frameworks: Be prepared to navigate various laws and regulations (e.g., GDPR, HIPAA) that govern data protection.
Audit Readiness: Regular audits and assessments will be necessary to ensure compliance.

5. Incident Response
Preparedness: Have a well-defined incident response plan in place for potential breaches or attacks.
24/7 Availability: Clients often expect round-the-clock monitoring and support.

6. Focus on Prevention and Education
Proactive Measures: Invest in preventive measures, including risk assessments and vulnerability management.
Training Programs: Regular training for clients’ employees on best practices and threat awareness.

7. Quality of Service
Reliability: Deliver consistent and dependable services to build a solid reputation.
Feedback Loop: Use client feedback to improve services continually.
            </p>
  
            <div className="mt-4 md:mt-8">
              <a
                href="#/home"
                className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-blue-900"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
  
        <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
          <img
            alt=""
            src="https://media.istockphoto.com/id/637912692/photo/nairobi-cityscape-capital-city-of-kenya.jpg?s=612x612&w=0&k=20&c=S8wPNq9om-IMcapXFC030ew28nhpYCFYBStX5yxCQbs="
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
  
          <img
            alt=""
            src="https://media.istockphoto.com/id/1299026534/photo/nairobi-kenya.jpg?s=612x612&w=0&k=20&c=xwCQ441cTHFBTZpb8ihvVwqqtTZjmees1C3xdJc_nfw="
            className="h-40 w-full object-cover sm:h-56 md:h-full"
          />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Skills
