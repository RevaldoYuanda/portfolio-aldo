// app/projects/page.tsx
export default function Projects() {
    return (
      <section>
        <div className="project">
        <h1>My Projects</h1>
        <ul>
          <li className="project-teks">Project 1 - While still in college, 1 TEAM created Stress Relief Therapy with Natural Musical Chairs won the Silver Medal in the ASEAN Innovation Science and Entrepreneur Fair (AISEF) 2020, and passed the funding stage of the Student Creativity Program-Creative Initiative (PKM-KC) by making the Track Child Application to Reduce Child Abuse Rates. 
            </li>
          <li className="project-teks">Project 2 - 
          Creating IoT devices, total 10-20 more such as temperature control, watering, monitoring, camera detection, electronic control 2020-2024 currently
          </li>
          <video controls width="100%" height="auto">
          <source src="/esp32.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
         
          <li className="project-teks">Project 3 - I often create simple websites using the ,react & next js , laravel, and free or paid website hosting, can be called a front end developer.           </li>
        </ul>
        <ul>
          <li>
          <a href="https://news-aldo-portofolio.netlify.app/">Portfolio 1</a>
          </li>
        </ul>
        <ul>
          <li>
          <a href="https://my-start-up-hardiot.netlify.app/">Portfolio 2</a>
          </li>
        </ul>
        <ul>
          <li>
          <a href="https://hard-iot-startup.netlify.app/">Portfolio 3</a>
          </li>
        </ul>
        </div>
      </section>
    );
  }
  