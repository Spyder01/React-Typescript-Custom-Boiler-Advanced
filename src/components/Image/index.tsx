import type {FC} from 'react';
import { Component } from 'react';
import { Suspense } from 'react';



interface ImageProps {
    src: string;
    alt: string;
    Loader: FC;
    className?: string;
}

const Image:FC<ImageProps> = ({src, alt, Loader, className}) => {
    

    return (
        <Suspense fallback={<Loader />}>
            <ImageMain src={src} alt={alt} Loader={Loader} className={className} />
        </Suspense >
    )
}

class ImageMain extends Component<ImageProps> {
    public state = {
        hasError: false
    }

    constructor(props: ImageProps) {
        super(props);
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }
    componentDidCatch(error:any, errorInfo: any) {
        console.log(error, errorInfo);
    }  
    render() {
        const {src, alt, className} = this.props;
        if (!this.state.hasError) {
        return <img src={src} alt={alt} className={className} />
        } else {
            return null;
        }
    }
}

export default Image;