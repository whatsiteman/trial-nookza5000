import React, { useState, useRef } from 'react';
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const HomePage = ({ data }) => {
  const { site, headerMarkdownRemark, homeMarkdownRemark, aboutMarkdownRemark, featureMarkdownRemark, serviceMarkdownRemark, contactMarkdownRemark, footerMarkdownRemark } = data

  const [collapse, setCollapse] = useState(true);
  const [path, setPath] = useState("main");

  const s1 = useRef(null)
  const s2 = useRef(null)
  const s3 = useRef(null)
  const s4 = useRef(null)
  const s5 = useRef(null)
  const executeScroll = (ref) => ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' })

  return (
    <Layout>
      <SEO title="Website Creator" classNames="stretched" />
      <header id="header" className={`sticky-header`}>
        <div className="" id="header-wrap">
          <div className="container clearfix">
            <div id="primary-menu-trigger" onClick={() => setCollapse(!collapse)} onKeyDown={() => setCollapse(!collapse)} role="button" tabIndex="-1">
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="row clearfix">
              <div className="col-lg-5 col-12">
                <div id="logo">
                  <Link className="brand-logo" to="/">
                    <Img fixed={headerMarkdownRemark.frontmatter.logo.childImageSharp.fixed}  alt={site.siteMetadata.title}/>
                  </Link>
                </div>
              </div>
              <div className="col-lg-7 col-12">
                <nav id="primary-menu">
                  <ul className={`one-page-menu  ${collapse ? '' : 'd-block'}`}>
                    <li className={path === "main" ? "current" : ""}>
                      <button className="button button-link" onClick={() => { executeScroll(s1); setPath("main"); }}>
                        {homeMarkdownRemark.frontmatter.menu}
                      </button>
                    </li>
                    <li className={path === "about" ? "current" : ""}>
                      <button className="button button-link" onClick={() => { executeScroll(s2); setPath("about"); }}>
                        {aboutMarkdownRemark.frontmatter.menu}
                      </button>
                    </li>
                    <li className={path === "service" ? "current" : ""}>
                      <button className="button button-link" onClick={() => { executeScroll(s3); setPath("feature"); }}>
                        {featureMarkdownRemark.frontmatter.menu}
                      </button>
                    </li>
                    <li className={path === "feature" ? "current" : ""}>
                      <button className="button button-link" onClick={() => { executeScroll(s4); setPath("service"); }}>
                        {serviceMarkdownRemark.frontmatter.menu}
                      </button>
                    </li>
                    <li className={path === "contact" ? "current" : ""}>
                      <button className="button button-link" onClick={() => { executeScroll(s5); setPath("contact"); }}>
                        {contactMarkdownRemark.frontmatter.menu}
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section id="slider" style={{ background: '#222' }} ref={s1}>
        <div className="center dark pt-60 pb-60">
          <div className="divcenter" style={{ maxWidth: '400px' }}>
            <Img fluid={homeMarkdownRemark.frontmatter.image.childImageSharp.fluid} />
          </div>
          <h1 className="divcenter" style={{ maxWidth: '700px', fontSize: '40px' }}>
            {homeMarkdownRemark.frontmatter.title}
          </h1>
        </div>
      </section>
      {homeMarkdownRemark.html ?
        <section className="pt-60 pb-60">
          <div className="container">
            <p className="lead" dangerouslySetInnerHTML={{ __html: homeMarkdownRemark.html }} />
          </div>
        </section> : false
      }
      <section className="pt-60 pt-20-xs pb-60 pb-20-xs" ref={s2}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 order-md-2 order-1">
              <Img fluid={aboutMarkdownRemark.frontmatter.image.childImageSharp.fluid} />
            </div>
            <div className="col-lg-6 col-md-12 order-md-1 order-2">
              <div className="heading-block">
                <h2>{aboutMarkdownRemark.frontmatter.title}</h2>
                <span className="before-heading">
                  {aboutMarkdownRemark.frontmatter.description}
                </span>
              </div>
              {aboutMarkdownRemark.html ?
                <p className="lead" dangerouslySetInnerHTML={{ __html: aboutMarkdownRemark.html }} /> : false
              }
            </div>
          </div>
        </div>
      </section>
      <section className="pt-60 pt-20-xs pb-60 pb-20-xs" ref={s3}>
        <div className="center">
          <div className="container">
            <h2 className="divcenter font-body" style={{ maxWidth: '700px', fontSize: '40px' }}>
            {featureMarkdownRemark.frontmatter.title}
            </h2>
            <p className="lead divcenter" style={{ maxWidth: '750px' }}>
              {featureMarkdownRemark.frontmatter.description}
            </p>
          </div>
        </div>
      </section>
      <section className="pt-60 pb-60 pt-20-xs pb-20-xs">
        <div className="container center">
          <h2 className="divcenter nobottommargin" style={{ maxWidth: '700px' }}>
            {featureMarkdownRemark.frontmatter.subtitle}
          </h2>
          <p className="lead divcenter" style={{ maxWidth: '800px' }}>
            {featureMarkdownRemark.frontmatter.subdescription}
          </p>
          <div className="row">
            {featureMarkdownRemark.frontmatter.list.map((item, i) => {
              const title = item.title || ""
              return (
                <div className="col-12 col-lg-4" key={i}>
                  <div className="card card-block_container text-center">
                    <Img className="card-img-top"
                      fluid={item.image.childImageSharp.fluid}
                    />
                    <div className="card-body">
                      <h5 className="card-title card-block__title ">
                        {title}
                      </h5>
                      <p className="card-text card-block__text">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
          <p className="lead" dangerouslySetInnerHTML={{ __html: featureMarkdownRemark.html }} />
        </div>
      </section>
      <section className="pt-60 pt-20-xs pb-60 pb-20-xs" ref={s4}>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <Img fluid={serviceMarkdownRemark.frontmatter.image.childImageSharp.fluid} />
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="heading-block">
                <h2> {serviceMarkdownRemark.frontmatter.title}</h2>
                <span className="before-heading"> {serviceMarkdownRemark.frontmatter.description}</span>
              </div>
              <p className="lead" dangerouslySetInnerHTML={{ __html: serviceMarkdownRemark.html }} />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <p className="lead" dangerouslySetInnerHTML={{ __html: contactMarkdownRemark.html }} />
      </div>
      <section className="center pt-60 pt-20-xs pb-60 pb-20-xs" ref={s5}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mt-2 mb-2" style={{ color: '#007bfd' }}>
                <FontAwesomeIcon icon={faFacebookMessenger} size="4x" />
              </div>
              <h2 className="divcenter" style={{ maxWidth: '700px', fontSize: '40px' }}>
                {contactMarkdownRemark.frontmatter.title}
              </h2>
              <p className="lead divcenter" style={{ maxWidth: '750px' }}>
                {contactMarkdownRemark.frontmatter.description}
              </p>
              <a href={contactMarkdownRemark.frontmatter.button_link} target="_blank" rel="noopener noreferrer"
                className="button button-border t600">
                {contactMarkdownRemark.frontmatter.button_text}
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="page-footer">
        <ul className="copyright">
          <li>{footerMarkdownRemark.frontmatter.footer}</li>
        </ul>
        <ul className="contact">
          <li className="powered">
            <a href="https://whatsiteman.com/" target="_blank" rel="noopener noreferrer">Powered by whatsiteman</a>
          </li>
          <li>
            <a href="https://www.facebook.com/whatsiteman/" target="_blank" rel="noopener noreferrer">
              <img width="25" src="https://www.whatsiteman.com/static/logo-ac6b36e89eb24d46b2146c8c0e563eb1.png" alt="whatsiteman"/>
            </a>
          </li>
        </ul>
      </footer>
    </Layout>
  )
}

export default HomePage

export const pageQuery =
  graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    },
    headerMarkdownRemark: markdownRemark(fileAbsolutePath: {regex: "/header.md$/"})  
    {
      frontmatter {
        logo {
          childImageSharp {
            fixed(width: 100, height: 100, quality: 100) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    },
    homeMarkdownRemark: markdownRemark(fileAbsolutePath: {regex: "/home.md$/"})  
    {
      html
      frontmatter {
        menu
        title
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
    aboutMarkdownRemark: markdownRemark(fileAbsolutePath: {regex: "/about.md$/"})  
    {
      html
      frontmatter {
        menu
        title
        description
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
    featureMarkdownRemark: markdownRemark(fileAbsolutePath: {regex: "/feature.md$/"})  
    {
      html
      frontmatter {
        menu
        title
        description
        subtitle
        subdescription
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        list {
          description
          title
          image {
            childImageSharp {
              fluid(quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    },
    serviceMarkdownRemark: markdownRemark(fileAbsolutePath: {regex: "/service.md$/"})  
    {
      html
      frontmatter {
        menu
        title
        description
        image {
          childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    },
    contactMarkdownRemark: markdownRemark(fileAbsolutePath: {regex: "/contact.md$/"})  
    {
      html
      frontmatter {
        menu
        icon
        title
        description
        button_text
        button_link
      }
    },
    footerMarkdownRemark: markdownRemark(fileAbsolutePath: {regex: "/footer.md$/"})  
    {
      frontmatter {
        footer
      }
    },
  }
`
