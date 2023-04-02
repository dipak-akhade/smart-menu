import React from 'react';
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <section class="about">
    <link
      rel="stylesheet"
      href="https://cdn.rawgit.com/michalsnik/aos/2.0.1/dist/aos.css"
    />
    <script src="https://cdn.rawgit.com/michalsnik/aos/2.0.1/dist/aos.js"></script>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css"
    ></link>

    <div class="container aos-init aos-animate" data-aos="fade-up">
      <div class="row">
        <div
          class="col-lg-6 order-1 order-lg-2 aos-init aos-animate"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="about-img">
            <img
              src="https://bootstrapmade.com/demo/templates/Restaurantly/assets/img/about.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
          <h3>Welcome to our WhatsMenu website!</h3>
          <p class="fst-italic">
            We are excited to provide you with an innovative and convenient
            way to view our menu and explore all of your delicious offerings.
          </p>
          <ul>
            <li>
              <i class="bi bi-check-circle"></i> You can easily view menu
              using your smartphone by simply scanning the QR code located on
              your table
            </li>
            <li>
              <i class="bi bi-check-circle"></i> Browse our menu at your own
              pace and place your order directly from your phones.
            </li>
            <li>
              <i class="bi bi-check-circle"></i> Makes the process quick and
              easy.
            </li>
            <li>
              <i class="bi bi-check-circle"></i> we are dedicated to providing
              our customers with the highest level of service and
              satisfaction.
            </li>
          </ul>
          <p>
            Thank you for choosing our website. We hope that you enjoy
            exploring our menu and finding your new favorite dish!
          </p>
        </div>
      </div>
    </div>
  </section>
  );
}
