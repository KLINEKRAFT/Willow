import { useState } from 'react'
import { motion } from 'framer-motion'
import { WillowMark, MenuGlyph, CloseGlyph } from './icons'
import './Navbar.css'

const links = [
  { label: 'Components', href: '#components', active: true },
  { label: 'Tokens', href: '#tokens', active: false },
  { label: 'Themes', href: '#themes', active: false },
  { label: 'Docs', href: '#docs', active: false },
  { label: 'Contact', href: '#contact', active: false },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <motion.nav
        className="nav"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 0.68, 0.32, 1] }}
      >
        <a className="nav__brand" href="#top">
          <WillowMark className="nav__mark" />
          <span className="nav__word">Willow</span>
        </a>

        <div className="nav__set">
          {links.map((link) => (
            <a
              key={link.label}
              className={`nav__link${link.active ? ' is-active' : ''}`}
              href={link.href}
              aria-current={link.active ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}

          <button
            className="nav__burger"
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseGlyph /> : <MenuGlyph />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <div className="menu" id="menu">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  )
}
