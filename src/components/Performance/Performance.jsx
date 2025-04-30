import './Performance.scss'
import classNames from 'classnames'
import Button from "@/components/Button";

const Performance = (props) => {
    const {
        className,
    } = props

  const titleId = "Explore the Frontiers"

    return (
        <section
            className={classNames(className, 'section performance')}
            aria-labelledby={titleId}
        >
          <div className="container">
            <div className="performance__content">
              <div className="performance__slider">
                <header className="performance__slider-header">
                  <span className="performance__slider-pretitle">Your Journey to Tomorrow Begins Here</span>
                  <span className="performance__slider-title h1">Explore the Frontiers of Artificial Intelligence</span>
                  <div className="performance__slider-description">
                    <p>Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.</p>
                  </div>
                </header>
                <ul className="performance__advantages">
                  <li className="performance__advantage">
                    <h3 className="performance__advantage-title">300<span>+</span></h3>
                    <div className="performance__advantage-description">
                      <p>Resources available</p>
                    </div>
                  </li>
                  <li className="performance__advantage">
                    <h3 className="performance__advantage-title">12k<span>+</span></h3>
                    <div className="performance__advantage-description">
                      <p>Total Downloads</p>
                    </div>
                  </li>
                  <li className="performance__advantage">
                    <h3 className="performance__advantage-title">10k<span>+</span></h3>
                    <div className="performance__advantage-description">
                      <p>Active Users</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="performance__resources">
                <ul className="performance__authors">
                  <li className="performance__author">
                    <img src="" alt="name" aria-label="name"/>
                  </li>
                  <li className="performance__author">
                    <img src="" alt="name" aria-label="name"/>
                  </li>
                  <li className="performance__author">
                    <img src="" alt="name" aria-label="name"/>
                  </li>
                  <li className="performance__author">
                    <img src="" alt="name" aria-label="name"/>
                  </li>
                </ul>
                <div className="performance__resources-content">
                  <h5 className="performance__resources-title">Explore 1000+ resources</h5>
                  <div className="performance__resources-description">
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                  </div>
                </div>
                <Button
                    href="/resources"
                    label="Explore Resources"
                    iconName="yellow-arrow"
                />
              </div>
            </div>
            <div className="performance__links"></div>
          </div>
        </section>
    )
}

export default Performance