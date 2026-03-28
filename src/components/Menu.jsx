import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuCategories = [
    {
      title: "Main Course",
      subtitle: "(South Indian Traditional)",
      items: [
        "Pickle", "Palya (Vegetable curry)", "Rice", "Rasam",
        "Papad", "Sambar", "Menaskayi (Sweet curry)", "Payasa", "Buttermilk"
      ]
    },
    {
      title: "Indian Breads",
      subtitle: "(Extra)",
      items: [
        "Poori", "Rumali Roti", "Chapathi", "Coin Parota",
        "Rice Roti (depends on quantity)", "Tawa Naan"
      ]
    },
    {
      title: "Starters",
      subtitle: "Customizable",
      items: [
        "Gobi Manchurian", "Paneer Manchurian", "Baby Corn Manchurian",
        "Etc. — customizable"
      ]
    },
    {
      title: "Rice Specials",
      subtitle: "",
      items: [
        "Veg Pulav", "Paneer Pulav", "Veg Biryani", "Jeera Rice",
        "Ghee Rice", "Fried Rice", "Tomato Rice"
      ]
    },
    {
      title: "Gravy Varieties",
      subtitle: "",
      items: [
        "Veg Gravy", "Paneer Gravy", "Mushroom Gravy",
        "# Other gravies on request"
      ]
    },
    {
      title: "Sweets",
      subtitle: "Delights & Varieties",
      items: [
        "Kal Laddu, Rava Laddu", "Dry Jamoon, Gulab Jamoon",
        "Dry Fruits Barfi, Choco Barfi", "Badam Barfi, Cashew Barfi",
        "Kaju (Besan Sweet), Holige", "Malpuri, Athirasam",
        "Halwa & Sehera Special"
      ]
    }
  ];

  return (
    <section className="menu section-padding" id="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        <p className="menu-subtitle">Think Veg, Think Vinayaka | Surathkal, Mangalore</p>
        
        <div className="menu-grid">
          {menuCategories.map((category, index) => (
            <div className="menu-card" key={index}>
              <div className="menu-card-header">
                <h3>{category.title}</h3>
                {category.subtitle && <span>{category.subtitle}</span>}
              </div>
              <ul className="menu-list">
                {category.items.map((item, idx) => (
                  <li key={idx}>
                    <span className="bullet">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
