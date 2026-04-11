import './App.css'

function App() {
  return (
    <>
      {/* NAVBAR */}
      <nav className="p-0 navbar navbar-expand-sm bg-secondary text-uppercase fixed-top" id="mainNav">
        <div className="p-2 container">
          <a className="navbar-brand" href="#page-top">Jeevan Gill</a>
          <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i className="fas fa-bars"></i>
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
              Software Development / IT / Networking / Projects
            </p>
          </div>
          <a
            href="/images/Jeevan_Gill_IT_Resume_v1.0.pdf"
            download
            className="btn btn-outline-light btn-lg mt-4"
          >
            Download Resume
          </a>
        </div>
      </header>

      {/* SKILLS */}
      <section className="page-section bg-light" id="skills">
        <div className="container">
          <h2 className="h2 page-section-heading text-center text-uppercase text-secondary mb-0">
            Skills &amp; Technologies
          </h2>
          <div className="row justify-content-center mt-5 gx-4 gy-5">
            <div className="col-md-3 col-6">
              <h6 className="text-uppercase text-secondary fw-bold mb-3">Languages</h6>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <span className="skill-badge">Python</span>
                <span className="skill-badge">JavaScript</span>
                <span className="skill-badge">C++</span>
                <span className="skill-badge">Java</span>
                <span className="skill-badge">HTML / CSS</span>
                <span className="skill-badge">SQL</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <h6 className="text-uppercase text-secondary fw-bold mb-3">Frameworks &amp; Web</h6>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <span className="skill-badge">React</span>
                <span className="skill-badge">Bootstrap</span>
                <span className="skill-badge">Vite</span>
                <span className="skill-badge">REST APIs</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <h6 className="text-uppercase text-secondary fw-bold mb-3">Networking</h6>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <span className="skill-badge">TCP/IP</span>
                <span className="skill-badge">DNS / DHCP</span>
                <span className="skill-badge">VPN</span>
                <span className="skill-badge">VLANs</span>
                <span className="skill-badge">OpenVPN</span>
                <span className="skill-badge">UniFi</span>
                <span className="skill-badge">Pi-hole</span>
                <span className="skill-badge">Firewalls</span>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <h6 className="text-uppercase text-secondary fw-bold mb-3">Systems &amp; Tools</h6>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <span className="skill-badge">Docker</span>
                <span className="skill-badge">VirtualBox</span>
                <span className="skill-badge">Git</span>
                <span className="skill-badge">Linux</span>
                <span className="skill-badge">Windows 10/11</span>
                <span className="skill-badge">RDP</span>
                <span className="skill-badge">Active Directory</span>
                <span className="skill-badge">Jira</span>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-md-8">
              <h6 className="text-uppercase text-secondary fw-bold mb-3">Relevant Coursework</h6>
              <div className="d-flex flex-wrap gap-2 justify-content-center">
                <span className="skill-badge">Object-Oriented Programming</span>
                <span className="skill-badge">Data Structures &amp; Algorithms</span>
                <span className="skill-badge">Databases</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
                  React / Vite / Bootstrap Website
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
            I’m a computer science student with a strong interest in IT, networking, and hands-on technical work. I enjoy building real projects that help me understand how things actually work — whether that’s managing a home network, configuring remote access, or building and deploying web applications. I’m currently studying Computer Science at Langara College, with coursework in OOP, Data Structures & Algorithms, and Databases.
          </p>

          <p className="font-weight-bold">
            My home lab experience includes designing a network with UniFi hardware, setting up custom firewall rules, VLANs, and traffic segmentation to simulate an enterprise environment. I’ve deployed an OpenVPN server for encrypted remote access and hosted a Pi-hole DNS server for network-wide ad filtering and query logging. I’ve also provisioned and managed Docker containers and Linux/Windows virtual machines in VirtualBox, working through real connectivity and configuration issues across all systems.
          </p>

          <p className="font-weight-bold">
            On the software side, I built a production website for a local business using React, Vite, and Bootstrap — deployed on Vercel with automated CI/CD and a third-party booking integration. I also developed a game project in Unreal Engine 5 using C++, implementing gameplay systems including player movement, enemy AI, combat, and HUD. I’m currently focused on growing in IT and networking roles where I can apply what I’ve learned and keep developing.
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white page-section" id="contact">
        <div className="container">
          <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
            Contact
          </h2>

          <div className="text-center mt-4">
            <p className="h6 text-secondary mb-2">
              <a href="mailto:jeevangill@msn.com" className="text-secondary">
                jeevangill@msn.com
              </a>
            </p>
            <p className="h6 text-secondary">
              Surrey, BC
            </p>
          </div>
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

            <div id="piholeCarousel" className="carousel mt-4 modal-carousel" data-bs-ride="false" data-bs-touch="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="carousel-item-inner">
                    <img src="images/pihole-diagram.png" alt="Pi-hole network diagram" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-inner">
                    <img src="images/Pihole1.png" alt="Pi-hole dashboard screenshot 1" />
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="carousel-item-inner">
                    <img src="images/Pihole2.png" alt="Pi-hole dashboard screenshot 2" />
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center gap-5 mb-4">
              <button className="btn btn-outline-secondary btn-sm" type="button" data-bs-target="#piholeCarousel" data-bs-slide="prev">
                ← Prev Image
              </button>
              <button className="btn btn-outline-secondary btn-sm" type="button" data-bs-target="#piholeCarousel" data-bs-slide="next">
                Next Image →
              </button>
            </div>

            <p className="text-secondary">
              I set up a Pi-hole DNS server on my home network to better understand how DNS works and how network-wide filtering can be implemented. I hosted Pi-hole inside a Docker container on a Windows machine and configured my router to use it as the primary DNS server for all connected devices, so every query on the network passes through Pi-hole before reaching an external resolver.
            </p>

            <p className="text-secondary">
              The query log screenshot shows Pi-hole actively intercepting DNS requests from devices on the network — blocked queries are flagged and resolved to 0.0.0.0 rather than returning a real IP, effectively dropping the request. This gave me real-time visibility into what every device was doing at the DNS level, including ad networks and tracking domains being silently blocked in the background.
            </p>

            <p className="text-secondary">
              The domain management screenshot shows the allow and blocklist controls I used to fine-tune filtering. I could manually permit specific domains that were incorrectly blocked, or add domains to the blocklist beyond the default filter lists. Working through these controls helped me understand how DNS-based filtering works in practice and how to balance blocking unwanted traffic without breaking legitimate services.
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* VPN MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalVpn">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">VPN Setup</h2>

            <img className="img-fluid my-4" src="images/vpn-diagram.png" alt="VPN network diagram" />

            <p className="text-secondary">
              I set up a home VPN using OpenVPN on my router so I could securely access my home network from outside. The goal was to understand how remote access works and how devices connect back into a private network over the internet. I configured the VPN directly on the router and tested connections from external networks to make sure I could reach local services.
            </p>

            <p className="text-secondary">
              Since my home network uses a dynamic public IP, I also set up Dynamic DNS using No-IP with a custom hostname. This allowed me to connect to my network using a consistent domain name instead of a changing IP address. The router automatically updates the hostname with my current public IP, which keeps the VPN connection stable over time.
            </p>

            <p className="text-secondary">
              While working on this, I learned how public vs private IP addressing works, how port forwarding and routing affect connectivity, and how DNS plays a role in remote access. I also ran into and fixed issues related to DNS resolution, connection failures, and client configuration, which helped me understand how all the pieces fit together in a real setup.
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* UE5 MODAL */}
      <div className="portfolio-modal modal fade" id="projectModalUe5">
        <div className="modal-dialog modal-xl">
          <div className="modal-content text-center p-4">
            <button className="btn-close ms-auto" data-bs-dismiss="modal"></button>

            <h2 className="text-secondary mt-3">Unreal Engine 5 Project</h2>

            <iframe
              src="https://www.youtube.com/embed/wvbgWcTxk14"
              title="Unreal Engine 5 Gameplay"
              allowFullScreen
              style={{width: '100%', aspectRatio: '16/9', border: 'none', display: 'block', margin: '1.5rem 0'}}
            ></iframe>
            <p className="text-secondary">
              I developed this Unreal Engine 5 project to learn how game development works using C++ and the Unreal Engine workflow. I followed a structured tutorial as a guide, but focused on understanding how everything connects, including class structure, components, and how gameplay logic is implemented and compiled inside the engine. This gave me experience working with Unreal’s C++ system instead of just using visual scripting.
            </p>

            <p className="text-secondary">
              The project includes core gameplay systems such as player movement, enemy AI behavior, combat mechanics, hit detection, health systems, and basic UI elements like a HUD. I worked with character classes, animation setup, and interactions between different actors in the world. I also dealt with things like AI sensing, enemy responses, and event-driven logic that ties gameplay systems together.
            </p>

            <p className="text-secondary">
              A big part of this project was learning how to troubleshoot and debug issues. I worked through build errors, project configuration problems, and differences between how things behave in the editor versus a standalone build. I also learned how Unreal handles project files, compilation, and dependencies, which helped me get more comfortable working with larger systems and understanding how everything runs behind the scenes.
            </p>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <button className="btn btn-outline-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
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

              <div className="d-flex justify-content-center my-3">
                <a
                  href="https://www.barkandlounge.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  View Live Site
                </a>
              </div>

              <p className="text-secondary">
                I developed the Bark and Lounge doggy daycare website using React, Vite, and Bootstrap to deliver a fast, modern, and user-friendly experience for both the business and its customers. The site is hosted on Vercel, leveraging automated CI/CD, custom domains, and HTTPS for a secure and reliable deployment. I architected the codebase with modular, reusable components and followed best practices for maintainability and scalability. A key feature is the integration of Setmore for online booking—customers can easily schedule appointments through an embedded, customized booking system, streamlining client management and improving operational efficiency for the business. This project demonstrates my ability to deliver production-ready web applications, integrate third-party APIs, and provide real business value—skills directly relevant to IT and software engineering roles.
              </p>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <button className="btn btn-outline-secondary" data-bs-dismiss="modal">
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