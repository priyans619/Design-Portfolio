import React, { useState } from "react";


function Contact() {

  return (
    <div
      name="contact"
      className="w-full h-full bg-[#0e0e0e] text-gray-300 md:m-auto"
    >
      <div className="flex flex-col justify-center items-center w-full h-full gap-6">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-left pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#98CE00]">
              <i class="fa-solid fa-user-tie"></i> Experience
            </p>
          </div>
        </div>
        <div className="max-w-[1000px] w-full gap-8 px-4">
          <div className="sm:text-left text-2xl font-bold">
            <div className="bg-slate-900 rounded-lg p-6 shadow-md border border-white">
            <p className=" mb-4">Stashfin - Jan 2023 to Present</p>
              <h3 className="text-xl text-gray-500 font-bold mb-2">Frontend Developer</h3>
              <p className="text-xl"> 
               - Implemented an EMI loan calculator feature within the app, enabling users to easily calculate loan repayment schedules. This addition increased the app's utility and user engagement by 10%.
                 <br />
               - Developed a document scanner module that efficiently extracts data from images of documents like RC copies and PAN cards. This feature streamlined data input processes for users.
                 <br />
               - Collaborated with the backend development team to seamlessly integrate the Google Vision API. Enabled users to capture high-quality images with guided instructions, optimizing data extraction accuracy.
                 <br />
               - Worked in User interface of octofin, an inbuilt customer support bot powered by yellow.ai which uses generative AI DAP (Dynamic Automation platform).
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-[1000px] w-full gap-8 px-4">
          <div className="sm:text-left text-2xl font-bold">
            <div className="bg-slate-900 rounded-lg p-6 shadow-md border border-white">
            <p className="mb-4">Utopia Global - Jan 2021 to July 2021</p>
              <h3 className=" text-gray-500 font-bold mb-2">Internship - Machine Learning</h3>
              
              <p className="text-xl"> 
              - Led a project employing AI and deep learning techniques to compute option prices.
                Utilized a robust dataset of one million entries, composing of intrinsic and extrinsic value components. 
              <br />
              - Demonstrated expertise in high-risk derivatives by designing algorithms for option pricing. Gained insights into risk evaluation and financial dynamics,
                highlighting proficiency in machine learning implementation. 
              <br />
              - Successfully integrated quantitative finance and machine learning models that computed option premiums. This experience showcased the synergy 
                (Quantitative Finance and ML Fusion)between advanced AI algorithms and financial instruments, enhancing proficiency in both domains.
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-[1000px] w-full gap-8 px-4">
          <div className="sm:text-left text-2xl font-bold">
            <div className="bg-slate-900 rounded-lg p-6 shadow-md border border-white">
            <p className=" mb-4">Artology.Boom - June 2020 to Dec 2022</p>
              <h3 className="text-xl text-gray-500 font-bold mb-2">Co-founder and Technical Head</h3>
              <p className="text-xl"> 
                - I created an art page <a className="text-gray-500" href="https://www.instagram.com/artology.boom/">Artology.Boom</a> and turned into e-commerce service by selling 
                  merchandise in form of hoodies and designed frame to the college students.
                  <br />
                - Designed, Developed, and Deployed Django based full stack website for our startup Artology.boom
                  <br />
                - Dispatched more than 1000+ order across raipur city combined.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );

}

export default Contact;
