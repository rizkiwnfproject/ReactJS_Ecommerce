import Button from '../../elements/Button/Button'
import Card from '../../elements/Card/Card'
import { FlexCenter, FlexStart } from '../../elements/Flex/Flex'
import InputCustom from '../../elements/Input/Input'
import TextCustom from '../../elements/Text/Text'
import { HiOutlineEnvelopeOpen, HiOutlineMapPin, HiOutlinePhoneArrowUpRight } from 'react-icons/hi2'

const ContactFragment = () => {
    return (
        <>
            <div className="grid grid-cols-4 gap-3" >
                <Card type="flexCenter" shadow="shadow-md" classname="flex-col" padding=''>
                    <FlexCenter width='max-w-[270px] w-full' justify='justify-center' classname="flex-col p-6 mx-auto text-center" gap='gap-4'>
                        <HiOutlineMapPin size="50px" className='text-green-success-dark' />
                        <TextCustom type="body_md_400" textColor='text-gray-800'>2715 Ash Dr. San Jose, South Dakota 83475</TextCustom>
                    </FlexCenter>
                    <FlexCenter classname="w-full flex-col justify-center p-6 max-w-[270px] mx-auto text-center border-y border-gray-100" gap='gap-4'>
                        <HiOutlineEnvelopeOpen size="50px" className='text-green-success-dark' />
                        <TextCustom type="body_md_400" textColor='text-gray-800' classname="flex flex-col">Proxy@gmail.com <span>Help.proxy@gmail.com</span> </TextCustom>
                    </FlexCenter>
                    <FlexCenter classname="w-full flex-col justify-center p-6 max-w-[270px] mx-auto text-center" gap='gap-4'>
                        <HiOutlinePhoneArrowUpRight size="50px" className='text-green-success-dark' />
                        <TextCustom type="body_md_400" textColor='text-gray-800' classname="flex flex-col">(219) 555-0114 <span>(164) 333-0487</span></TextCustom>
                    </FlexCenter>
                </Card>
                <div className="col-span-3">
                    <Card type="flexCenter" padding="px-10 py-12" classname="w-full h-full" shadow="shadow-md" hover={false}>
                        <FlexStart classname='flex-col w-full'>
                            <TextCustom type="body_xxl_600">Just Say Hello!</TextCustom>
                            <TextCustom type="body_sm_400" textColor='text-gray-500' classname="max-w-[490px]">Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.</TextCustom>
                            <FlexStart classname='flex-col w-full py-5'>
                                <FlexStart>
                                    <InputCustom name="name" type="text" placeholder="Input Your Name" />
                                    <InputCustom name="email" type="email" placeholder="zakirsoft@gmail.com" />
                                </FlexStart>
                                <InputCustom name="title" type="text" placeholder="Input Your Title/Subject" />
                                <InputCustom name="subject_field" type="textarea" placeholder="Input Your Field of Subject" />
                            </FlexStart>
                            <Button typeButton="buttonBasic" classname="w-1/4" padding='py-6' textType='body_md_600' textColor='text-white' label='Send Message' />
                        </FlexStart>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default ContactFragment