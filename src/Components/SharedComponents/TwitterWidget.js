import React from "react";
import { Timeline } from 'react-twitter-widgets';

class TwitterWidget extends React.Component{
    render() {
        return (
            <Timeline
                dataSource={{
                    sourceType: 'list',
                    screenName: `${process.env.REACT_APP_TWITTER_USERNAME}`,
                    id: `${process.env.REACT_APP_TWITTER_LIST_ID}`
                }}
                options={{
                    height: '700',
                    theme: 'dark'
                }}
                renderError={(_err) => 
                    <div style={{textAlign: 'center', font: 'font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif !important'}}>
                        <p>
                            Could not load Twitter Timeline.
                        </p>
                    </div>}
            />
        )
    }
}

export default TwitterWidget;