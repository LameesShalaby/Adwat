import "./Filtering.css";
import { Component } from "react";
import img from "../../assets/images/Rectangle.png";
import img_1 from "../../assets/images/Rectangle1.png";
import img_2 from "../../assets/images/Rectangle2.png";
import img_3 from "../../assets/images/Rectangle3.png";
import img_4 from "../../assets/images/Rectangle4.png";

const allImages = [
  {
    src: img,
    alt: "Image 1",
    category: "Software Development",
    title: "Go Care | Client's",
    description:
      "Go Care is a dynamic beauty and grooming application designed to assist clients in finding, exploring, and booking beauty and barber professionals.",
    cat: "Mobile App",
    date: "MM / YYYY",
  },
  {
    src: img_1,
    alt: "Image 2",
    category: "App Development",
    title: "CZone",
    description:
      "CZone is an ERP system that simplifies project management for engineering, contracting, consulting firms, quality labs, and project owners. Accessible via mobile and web, it ensures seamless coordination and communication among project stakeholders.",
    cat: "Mobile App",
    date: "MM / YYYY",
  },
  {
    src: img_2,
    alt: "Image 3",
    category: "Design & Branding",
    title: "Go Care | Business",
    description:
      "managing beauty center is a breeze, connect beauty centers, schedule appointments, for smooth day-to-day operations.",
    cat: "Mobile App",
    date: "MM / YYYY",
  },
  {
    src: img_3,
    alt: "Image 3",
    category: "Design & Branding",
    title: "Go Care - Administration",
    description:
      "management system grants the authority to selectively accept or reject service providers, closely monitor salons and clients reservations, and  Take Quick Actions as Necessary.",
    cat: "Web App",
    date: "MM / YYYY",
  },
  {
    src: img_4,
    alt: "Image 3",
    category: "App Development",
    title: "Berry",
    description:
      "An integrated e-commerce platform for showcasing products, tracking orders, and making online payments, allowing users to browse products, access product details, and make purchases.",
    cat: "Web App",
    date: "MM / YYYY",
  },
];

class ImageFilter extends Component {
  constructor() {
    super();
    this.state = {
      selectedFilter: "All",
    };
  }

  handleFilterChange = (filter) => {
    this.setState({ selectedFilter: filter });
  };

  filterImages = () => {
    if (this.state.selectedFilter === "All") {
      return allImages;
    }
    return allImages.filter(
      (image) => image.category === this.state.selectedFilter
    );
  };

  render() {
    return (
      <>
        <div className="filter-tabs">
          <button onClick={() => this.handleFilterChange("All")}>All</button>
          <button
            onClick={() => this.handleFilterChange("Software Development")}
          >
            Software Development
          </button>
          <button onClick={() => this.handleFilterChange("App Development")}>
            App Development
          </button>
          <button onClick={() => this.handleFilterChange("Design & Branding")}>
            Design & Branding
          </button>
        </div>
        <div className="image-container">
          {this.filterImages().map((image, index) => (
            <div className="col-lg-4 col-md-6 p-1" key={index} data-aos="fade-up" data-aos-easing="ease-in-sine"
            data-aos-duration="1500">
              <div className="filter-img-style">
                <img src={image.src} alt={image.alt} />
              </div>
              <div className="text-style">
                <h4>{image.title}</h4>
                <p>
                  {image.cat}
                  <span className="float-right">{image.date}</span>
                </p>
                <hr />
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default ImageFilter;
