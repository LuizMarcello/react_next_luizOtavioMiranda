import './styles.css'
import { Component } from 'react';
/* No caso de classes, as props já são passadas implicitamente. */
export class Button extends Component {
    render() {
        const { text, onnClick, disabled } = this.props;
        return (
            // <button onClick={this.loadMorePosts}>Carregar mais posts</button>
            <button
                disabled={disabled}
                className='button'
                onClick={onnClick}>
                {text}
            </button>
        )
    }
}

export default Button;