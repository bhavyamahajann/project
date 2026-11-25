/**
 * Smooth scroll to a section by ID
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

/**
 * Handle click event for smooth scrolling
 * Prevents default link behavior and scrolls to section
 * @param {Event} e - The click event
 * @param {string} sectionId - The ID of the section to scroll to
 */
export const handleScrollClick = (e, sectionId) => {
  e.preventDefault()
  scrollToSection(sectionId)
}
