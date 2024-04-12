import { useColor } from "@/contexts/ColorContext";


const ICP = () => {

    const { textColor } = useColor()

    return (
        <div className="icp" >
            <a
                className="link"
                rel="noopener noreferrer"
                target="_blank"
                href="http://beian.miit.gov.cn/"
                style={{ color: textColor }}
            >
                
            </a>
        </div>
    );
};

export default ICP;