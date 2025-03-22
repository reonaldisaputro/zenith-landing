"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// const portfolioItems = [
//   {
//     id: 1,
//     title: 'Website Lorem Ipsum',
//     category: 'Website',
//     client: 'Lap.On Indonesia',
//     projectDate: '1 March 2025',
//     uiProject: 'https://catchegpthdhjaxbd',
//     image: '/portfolio1.png',
//     description: `We focus at every stage on effective communication and collaboration between the client and ensuring that the final design meets the client's objectives and expectations.`
//   },
//   {
//     id: 2,
//     title: 'Mobile App Design',
//     category: 'Mobile app',
//     client: 'Tech Solutions',
//     projectDate: '15 March 2025',
//     uiProject: 'https://designproject.com',
//     image: '/portfolio1.png',
//     description: 'Another example project description...'
//   },
//   {
//     id: 3,
//     title: 'E-Commerce Platform',
//     category: 'Website',
//     client: 'Shopping Corp',
//     projectDate: '20 March 2025',
//     uiProject: 'https://ecommerce-project.com',
//     image: '/portfolio1.png',
//     description: 'A modern e-commerce platform with advanced features...'
//   },
//   {
//     id: 4,
//     title: 'Fitness Tracking App',
//     category: 'Mobile app',
//     client: 'Health First',
//     projectDate: '25 March 2025',
//     uiProject: 'https://fitness-app.com',
//     image: '/portfolio1.png',
//     description: 'A comprehensive fitness tracking application...'
//   },
//   {
//     id: 5,
//     title: 'Corporate Website',
//     category: 'Website',
//     client: 'Business Inc',
//     projectDate: '30 March 2025',
//     uiProject: 'https://corporate-site.com',
//     image: '/portfolio1.png',
//     description: 'A professional corporate website with modern design...'
//   },
//   {
//     id: 6,
//     title: 'Social Media App',
//     category: 'Mobile app',
//     client: 'Connect Social',
//     projectDate: '5 April 2025',
//     uiProject: 'https://social-app.com',
//     image: '/portfolio1.png',
//     description: 'An innovative social media platform...'
//   }
// ];

export default function Portfolio() {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const filters = ["All", "Website", "Mobile app", "Design"];

  useEffect(() => {
    async function fetchPortfolios() {
      try {
        const categoryType =
          activeFilter === "All"
            ? "all"
            : activeFilter === "Website"
            ? "web"
            : activeFilter === "Mobile app"
            ? "mobile"
            : "design";

        const response = await fetch(
          `https://forvideo.my.id/api/portfolios?type=${categoryType}&per_page=10&page=${currentPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const result = await response.json();

        if (result.success) {
          // Transform API data to match the required format
          const formattedData = result.data.map((item) => ({
            id: item.id,
            title: item.title_en || item.title_id,
            category: item.type === "web" ? "Website" : "Mobile app",
            client: item.client,
            projectDate: item.project_date,
            uiProject: item.url_project,
            image: item.thumbnail,
            description: item.short_desc_en || item.short_desc_id,
          }));

          setPortfolioItems(formattedData);
          setTotalPages(result.data.last_page);
        }
      } catch (error) {
        console.log("Error fetching portfolio:", error);
      }
    }

    fetchPortfolios();
  }, [activeFilter]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredItems =
    activeFilter === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">
              I&apos;m a human-focused Product Designer with 3+ years of
              experience
            </h1>
            {/* <p className="text-2xl mb-8">--it&apos;s lovely to e-meet you.</p>
            <div className="space-y-2 text-gray-300">
              <p>
                I&apos;m Claire Squire, currently fleshing out an 8-product
                design system that reduces
              </p>
              <p>
                technical debt for the product and marketing teams at Expert
                Institute.
              </p>
              <p>Previously, I was a</p>
              <p>
                Product Designer at the University of Notre Dame while pursuing
                my BA (2020)
              </p>
            </div> */}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-8">Portofolio</h2>

        {/* <p className="text-center text-gray-600 mb-8">
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur.
        </p> */}

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full ${
                activeFilter === filter
                  ? "bg-[#BBFF4D] text-black"
                  : "bg-white text-gray-600 border border-gray-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.length === 0 ? (
            <p className="text-gray-500 text-center col-span-full">
              Tidak ada portofolio yang ditemukan.
            </p>
          ) : (
            filteredItems.map((item) => (
              <Link
                href={`/en/portfolio/${item.id}`}
                key={item.id}
                className="flex"
              >
                <div className="bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-shadow flex flex-col w-full">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col flex-grow mt-4">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600 mt-2 line-clamp-3">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 flex items-center justify-center rounded-full ${
                  currentPage === page
                    ? "bg-[#BBFF4D] text-black"
                    : "border border-gray-300"
                }`}
              >
                {page}
              </button>
            )
          )}
          <button
            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </button>
        </div>
      </main>
    </>
  );
}
