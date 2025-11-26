import { PhoneCall, MapPin  } from 'lucide-react';
import SocialIcons from './socialIcons';

const FooterCenter = () =>{
    return(
        <div className="flex w-full sm:h-15 items-center border-b border-sky-200 py-5">
            <div className="flex w-full sm:flex-row flex-col gap-10">
                <div className="flex flex-row sm:justify-baseline justify-center">
                    <PhoneCall className="text-blue-950 mt-1 ml-1" size={13}/>
                    <p className="font-extrabold text-blue-950">1699</p>
                </div>
                <div className="flex flex-row sm:justify-baseline justify-center">
                    <MapPin className="text-blue-900 mt-[5px] ml-1" size={13}/>
                    <p className="font-normal text-blue-900">تهران ، خیابان بخارست 8 ، پلاک 3 ، واحد 9</p>
                </div>
                <div className="flex sm:mr-auto sm:ml-4 h-9 w-50 mx-auto">
                <SocialIcons/>
                </div>
            </div>
        </div>
    )
}

export default FooterCenter