import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'


class Main extends React.Component {

  _get_id(title) {
    switch (title) {
      case "About":
        return "about"
      case "Racing Results":
        return "results"
      case "Get Involved":
        return "join"
      default:
        return ""
    }
  }

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>
        <StaticQuery
          query={
            graphql`
            query {
              allContentfulMainPageArticles {
                edges {
                  node {
                    title
                    topImage {
                      file {
                        url
                      }
                    }
                    textBody {
                      json
                    }
                  }
                }
              }
            }
            `
          }
          render={data => (
            data.allContentfulMainPageArticles.edges.map((edge) => {
                return (
                  <article id={this._get_id(edge.node.title)} className={`${this.props.article === this._get_id(edge.node.title) ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
                    <h2 className="major">{edge.node.title}</h2>
                    <span className="image main"><img src={edge.node.topImage.file.url} /></span>
                    <div>{documentToReactComponents(edge.node.textBody.json)}</div>
                    {close}
                  </article>
                )
              }
            )
          )}
        />

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main