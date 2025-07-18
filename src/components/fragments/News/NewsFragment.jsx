import { BsArrowRight, BsChatSquare, BsPerson, BsTag } from "react-icons/bs";
import { FlexCenter, FlexStart } from "../../elements/Flex/Flex";
import { newsData } from "../../../constants/Constant";
import TextCustom from "../../elements/Text/Text";
import Card from "../../elements/Card/Card";
import ImageCustom from "../../elements/Image/Image";
import Button from "../../elements/Button/Button";
import TextIcon from "../../elements/Text/TextIcon";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const NewsFragment = (props) => {
    const { children } = props
    return (
        <>
            <div className="mb-10">
                {children}
            </div>
        </>
    )
}

const NewsCard = () => {
    const [itemsToShow, setItemsToShow] = useState(1);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemsToShow(3); // md ke atas
            } else {
                setItemsToShow(1); // sm
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return (
        <>
            <FlexCenter classname="justify-between mb-10">
                <TextCustom type="heading_3_600" respText="text-3xl" classname="w-full text-left md:text-center">Latest News</TextCustom>
                <Link to="blog">
                    <TextCustom type="body_sm_500" textColor="text-green-success" classname="flex md:hidden items-center gap-2">More <BsArrowRight /> </TextCustom>
                </Link>
            </FlexCenter>
            <FlexStart classname="justify-between">
                {newsData.slice(0, itemsToShow).map((data, index) => (
                    <Card key={index} type="flexStart" classname="max-w-[350px] md:max-w-[415px] md:min-h-[494px] flex-col rounded-xl" padding="p-0">
                        <div className="relative">
                            <ImageCustom path="news" image={data.image} alt={data.title} />
                            <button className="absolute bottom-5 left-5 bg-white rounded text-center w-[58px] h-[58px] flex flex-col justify-center">
                                <TextCustom
                                    type="body_xl_500"
                                    respText="text-lg"
                                >
                                    {data.date.day}
                                </TextCustom>
                                <TextCustom
                                    type="body_xs_400" respText="text-xs"
                                    textTransform="uppercase"
                                    textColor="text-gray-500"
                                    classname='tracking-[3%]'>
                                    {data.date.month}</TextCustom>
                            </button>
                        </div>
                        <FlexStart classname="flex-col p-6" gap="gap-4">
                            <FlexStart classname="flex-col">
                                <FlexStart classname="flex-col justify-between" gap="gap-6">
                                    <FlexStart gap="gap-3" width="w-full" justify="justify-start">
                                        <TextIcon icon={BsTag} respText="text-sm" text={data.category} />
                                        <TextIcon icon={BsPerson} respText="text-sm" text={<><span className="text-gray-500">by </span>{data.user}</>}>
                                        </TextIcon>
                                        <TextIcon icon={BsChatSquare} respText="text-sm" text={`${data.comments} comments`} />
                                    </FlexStart>
                                    <TextCustom type="body_lg_500" textColor="text-green-success-dark" leading="leading-6">
                                        {data.title}
                                    </TextCustom>
                                </FlexStart>
                            </FlexStart>
                            <Link to="blog/1">
                                <Button
                                    typeButton="textIcon"
                                    iconSize='1.2rem'
                                    textType='body_sm_500'
                                    textColor="text-green-success"
                                    label='read more'
                                    classname={`cursor-pointer`}
                                    bgColor="bg-white"
                                    icon={BsArrowRight}
                                    justify='w-full'
                                    reverse={true}
                                    shadow=""
                                    padding=""
                                />
                            </Link>
                        </FlexStart>
                    </Card>
                ))}
            </FlexStart>
        </>
    )
}

NewsFragment.NewsCard = NewsCard

export default NewsFragment