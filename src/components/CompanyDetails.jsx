const CompanyDetails = () => {
  return (
    <div className="container footer">
      <div className="row">
        <div className="col-sm-6 col-md-3 mb-4">
          <nav aria-label="Company links">
            <span className="nav-title">Company</span>
            <a href="#">About Us</a>
            <a href="#">Success Stories</a>
            <a href="#">Our partners</a>
            <a href="#">Our customers</a>
          </nav>
        </div>
        <div class="col-sm-6 col-md-3 mb-4">
          <nav aria-label="Solutions links">
            <span class="nav-title">Solutions</span>
            <a href="#">Contact Pro</a>
            <a href="#">Contact Basic</a>
            <a href="#">Sub-accounts</a>
            <a href="#">Contact Omni</a>
          </nav>
        </div>
        <div class="col-sm-6 col-md-3 mb-4">
          <nav aria-label="Trust Centre links">
            <span class="nav-title">Trust centre</span>
            <a href="#">Accessibility</a>
            <a href="#">Data Protection</a>
            <a href="#">Privacy</a>
            <a href="#">Security</a>
          </nav>
        </div>
        <div class="col-sm-6 col-md-3">
          <nav aria-label="Contact links">
            <span class="nav-title">Contact</span>
            <a href="">Contact</a>
            <a href="#">Support</a>
            <a href="#">Services</a>
            <a href="#">Report Security Issues</a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;
