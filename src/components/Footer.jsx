import styles from "./Footer.module.css"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import leetcode from "../assets/leetcode.png"


const Footer = () => {
  const socialProfiles = [
    { name: "LinkedIn", icon: linkedin, url: "https://www.linkedin.com/in/adarshkhatri/" },
    { name: "GitHub", icon: github, url: "https://github.com/AdarshKhatri01" },
    { name: "LeetCode", icon: leetcode, url: "https://leetcode.com/u/adarshkhatri392/" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copyright}>&copy; 2025 Adarsh Khatri. All rights reserved.</p>
        <h2 className={styles.production}>CURRENTLY IN PRODUCTION</h2>
        <div className={styles.socialProfiles}>
          {socialProfiles.map((profile, index) => (
            <a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label={profile.name}
            >
              <img src={profile.icon} alt={profile.name} className={styles.socialIcon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer

