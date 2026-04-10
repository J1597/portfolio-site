import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="p-0 navbar navbar-expand-sm bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="p-2 container">
          <a class="navbar-brand" href="#page-top">Jeevan Gill</a>
          <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-2 px-2" href="#portfolio">
                  Projects
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-2 px-2" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item mx-0 mx-lg-1">
                <a className="nav-link py-2 px-2" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="masthead bg-primary text-white text-center" id="page-top">
        <div className="container d-flex align-items-center flex-column">
          <h1 className="masthead-heading text-uppercase mt-5 mb-0">
            JEEVAN GILL
          </h1>

          <div className="mt-3 text-center">
            <p className="h1 masthead-subheading font-weight-light mb-2">
              My Portfolio
            </p>
            <p className="h5 font-weight-light mb-0">
              IT / Networking / Projects
            </p>
          </div>
        </div>
      </header>

      {/* PROJECTS */}
      <section className="bg-white page-section portfolio" id="portfolio">
        <div className="container">
          <h2 className="h2 page-section-heading text-center text-uppercase text-secondary mb-0">
            Projects
          </h2>

          <p className="text-center mt-4 mb-5">
            Click a project to view details.
          </p>

          <div className="row justify-content-center">
            <div className="row">
              {/* PIHOLE */}
              <div className="col-md-6 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModalPihole"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-white">
                      View Project
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="images/pihole-title.png"
                    alt="Pi-hole"
                  />
                </div>
                <h3 className="h5 text-center text-secondary mt-3 mb-0">
                  Pi-hole DNS Server
                </h3>
              </div>
              {/* VPN */}
              <div className="col-md-6 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModalVpn"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-white">
                      View Project
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="images/vpn-title.png"
                    alt="VPN"
                  />
                </div>
                <h3 className="h5 text-center text-secondary mt-3 mb-0">
                  VPN Setup
                </h3>
              </div>
            </div>
            <div className="row">
              {/* UE5 */}
              <div className="col-md-6 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModalUe5"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-white">
                      View Project
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="/images/ue5-title.png"
                    alt="UE5"
                  />
                </div>
                <h3 className="h5 text-center text-secondary mt-3 mb-0">
                  Unreal Engine 5 Project
                </h3>
              </div>
              {/* REACT AND VITE WEBSITE */}
              <div className="col-md-6 mb-5">
                <div
                  className="portfolio-item mx-auto"
                  data-bs-toggle="modal"
                  data-bs-target="#projectModalWebsite"
                >
                  <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                    <div className="portfolio-item-caption-content text-white">
                      View Project
                    </div>
                  </div>
                  <img
                    className="img-fluid"
                    src="images/website-diagram.png"
                    alt="React and Vite Website"
                  />
                </div>
                <h3 className="h5 text-center text-secondary mt-3 mb-0">
                  React and Vite Website
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="page-section bg-primary text-white mb-0" id="about">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-white">
            About
          </h2>
          <p className="font-weight-bold">
            I’m a computer science graduate with a strong interest in networking, systems, and hands-on technical work. I enjoy building real projects that help me understand how things actually work, whether that’s setting up services on my home network, configuring remote access, or developing applications using modern tools. This website itself is something I built using React plus Bootstrap, and it reflects both my technical skills and my approach to learning by doing.
          </p>

          <p className="font-weight-bold">
            A lot of my experience comes from working on practical projects. I’ve set up a Pi-hole DNS server using Docker on a Windows machine to manage and filter network traffic, and I built a home VPN using OpenVPN on my router with Dynamic DNS through No-IP so I can securely access my network from anywhere. I also run a Jellyfin media server, which I configured for local and remote streaming, giving me experience with file sharing, network paths, and handling media across devices. Projects like these helped me understand how systems connect together, including DNS, routing, IP addressing, and how real-world networks behave outside of theory.
          </p>

          <p className="font-weight-bold">
            I’ve also spent time learning software development, including building a game project in Unreal Engine 5 using C++. That experience helped me get more comfortable with object-oriented programming, debugging, and working through build and runtime issues. Overall, I like figuring things out by building and troubleshooting, and I’m always looking for ways to improve my skills. I’m currently focused on growing in IT and networking roles where I can apply what I’ve learned and keep developing.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact
          </h2>

          <p className="h6 text-secondary text-center mt-4">
            jeevan1597@outlook.com
            <br />
            Surrey, BC
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="p-0 footer text-center">
        <div className="p-4 container">
          <p className="mb-0">
            © {new Date().getFullYear()} Jeevan Gill. All rights reserved.
          </p>
        </div>
      </footer>

      {/* ================= MODALS ================= */}

      {/* PIHOLE MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalPihole">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">Pi-hole DNS Server</h2>

            <img className="img-fluid my-4" src="images/pihole-diagram.png" />

            <p className="text-secondary">
              I set up a Pi-hole DNS server on my home network to better understand how DNS works and how network-wide filtering can be implemented. I hosted Pi-hole inside a Docker container on a Windows machine and configured my router to use it as the main DNS server for all connected devices. This allowed all DNS queries on the network to pass through Pi-hole first, giving me visibility into traffic and control over blocking ads and tracking domains.
            </p>

            <p className="text-secondary">
              Through this setup, I learned how DNS requests flow from devices to the router and then to a local DNS server before reaching external resolvers. I tested and verified that Pi-hole was working by checking query logs and using tools like <em>nslookup</em> to confirm that blocked domains were resolving to 0.0.0.0. I also worked through issues like making sure the correct device was handling DNS requests and confirming that different devices on the network were actually using Pi-hole.
            </p>

            <p className="text-secondary">
              This project helped me better understand how local services can be integrated into a home network and how DNS can be used not just for resolution, but also for filtering and control. It also gave me hands-on experience with Docker, networking basics, and troubleshooting real-world issues in a self-hosted setup.
            </p>

            <button className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>

      {/* VPN MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalVpn">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">VPN Setup</h2>

            <img className="img-fluid my-4" src="images/vpn-diagram.png" />

            <p className="text-secondary">
              I set up a home VPN using OpenVPN on my router so I could securely access my home network from outside. The goal was to understand how remote access works and how devices connect back into a private network over the internet. I configured the VPN directly on the router and tested connections from external networks to make sure I could reach local services.
            </p>

            <p className="text-secondary">
              Since my home network uses a dynamic public IP, I also set up Dynamic DNS using No-IP with a custom hostname. This allowed me to connect to my network using a consistent domain name instead of a changing IP address. The router automatically updates the hostname with my current public IP, which keeps the VPN connection stable over time.
            </p>

            <p className="text-secondary">
              While working on this, I learned how public vs private IP addressing works, how port forwarding and routing affect connectivity, and how DNS plays a role in remote access. I also ran into and fixed issues related to DNS resolution, connection failures, and client configuration, which helped me understand how all the pieces fit together in a real setup.
            </p>

            <button className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>

      {/* UE5 MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalUe5">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">Unreal Engine 5 Project</h2>

            <img className="img-fluid my-4" src="images/ue5-diagram.png" />

            <div className="ratio ratio-16x9 my-4">
              <a
                href="https://www.youtube.com/watch?v=wvbgWcTxk14"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                ▶ Watch Gameplay
              </a>
            </div>
            <p className="text-secondary">
              I developed this Unreal Engine 5 project to learn how game development works using C++ and the Unreal Engine workflow. I followed a structured tutorial as a guide, but focused on understanding how everything connects, including class structure, components, and how gameplay logic is implemented and compiled inside the engine. This gave me experience working with Unreal’s C++ system instead of just using visual scripting.
            </p>

            <p className="text-secondary">
              The project includes core gameplay systems such as player movement, enemy AI behavior, combat mechanics, hit detection, health systems, and basic UI elements like a HUD. I worked with character classes, animation setup, and interactions between different actors in the world. I also dealt with things like AI sensing, enemy responses, and event-driven logic that ties gameplay systems together.
            </p>

            <p className="text-secondary">
              A big part of this project was learning how to troubleshoot and debug issues. I worked through build errors, project configuration problems, and differences between how things behave in the editor versus a standalone build. I also learned how Unreal handles project files, compilation, and dependencies, which helped me get more comfortable working with larger systems and understanding how everything runs behind the scenes.
            </p>

            <button className="btn btn-primary" data-bs-dismiss="modal">
              Close
            </button>
          </div>
        </div>
      </div>

        {/* REACT AND VITE WEBSITE MODAL */}
        <div className="portfolio-modal modal fade" id="projectModalWebsite">
          <div className="modal-dialog modal-xl">
            <div className="modal-content text-center p-4">
              <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>


              <h2 className="text-secondary mt-3">Bark and Lounge Doggy Daycare Website</h2>

              <img className="img-fluid my-4" src="images/WebsiteImage.png" alt="Bark and Lounge Website" />

              <div className="ratio ratio-16x9 my-4 d-flex justify-content-center align-items-center">
                <a
                  href="https://www.barkandlounge.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg"
                >
                  View Live Site
                </a>
              </div>

              <p className="text-secondary">
                I developed the Bark and Lounge doggy daycare website using React, Vite, and Bootstrap to deliver a fast, modern, and user-friendly experience for both the business and its customers. The site is hosted on Vercel, leveraging automated CI/CD, custom domains, and HTTPS for a secure and reliable deployment. I architected the codebase with modular, reusable components and followed best practices for maintainability and scalability. A key feature is the integration of Setmore for online booking—customers can easily schedule appointments through an embedded, customized booking system, streamlining client management and improving operational efficiency for the business. This project demonstrates my ability to deliver production-ready web applications, integrate third-party APIs, and provide real business value—skills directly relevant to IT and software engineering roles.
              </p>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-primary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App