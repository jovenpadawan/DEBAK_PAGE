import { NavLink } from 'react-router-dom';

const catalogCategories = [
    { name: 'Doboks', path: '/catalogo/doboks' },
    { name: 'Implementos', path: '/catalogo/implementos' },
    { name: 'Uniformes', path: '/catalogo/uniformes' }
];

export default function CatalogNavigation() {
    return (
        <nav className="event-navigation catalog-navigation" aria-label="Categorías del catálogo">
            {catalogCategories.map((category) => (
                <NavLink
                    key={category.path}
                    to={category.path}
                    end
                    className={({ isActive }) => `nav-tag-btn${isActive ? ' active' : ''}`}
                >
                    {category.name}
                </NavLink>
            ))}
        </nav>
    );
}
