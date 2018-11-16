import React, {Component} from 'react';
import '../../sass/ModalWindow.scss';
// import DefaultTemplate from '../components/modal-default-template';

const modalWindow = (classProp) => (ChildComponent) => {
    class ModalWindow extends Component {

        render() {
            return (
                this.props.show ?
                    <div className='modal-overlay'>
                        <div className={'modal ' + (classProp || '')}>
                            <div className='content'>
                                <ChildComponent
                                    {...this.props}
                                />
                                <div
                                    className={'close'}
                                    onClick={this.props.onClose}
                                >&#x2715;</div>
                            </div>
                        </div>
                    </div>
                    :
                    false
            )
        }
    }

    ModalWindow.displayName = `HOC(${getDisplayName(ChildComponent)})`;

    return ModalWindow;
}

const getDisplayName = (Component) => {
    return Component.displayName
        || Component.name
        || 'Component';
}

export default modalWindow;