/**
 * Created by griga on 11/30/15.
 */

import React from 'react'

import WidgetGrid from '../../../components/widgets/WidgetGrid'
import JarvisWidget  from '../../../components/widgets/JarvisWidget'


export default class Home extends React.Component {
  render() {
    return (
      <div id="content">
        <WidgetGrid>
          <div className="row">
            <article className="col-sm-6">

              <JarvisWidget >
                <header>
                  
                </header>
                {/* widget div*/}
                <div>
                  {/* widget content */}
                  <div className="widget-body">


                  </div>
                  {/* end widget content */}
                </div>
                {/* end widget div */}
              </JarvisWidget>

            </article>
          </div>

        </WidgetGrid>
      </div>
    )
  }
}