# this how we can give children as props and describe thier type

const Parent2 = () => {
return (

<div>
<Heading>place holder</Heading>
<Oscar>
<Heading>hello this children example</Heading>
</Oscar>
<Optional name={"shahrukh"} id={21} attandence={30} />
</div>
);
};

# Heading.tsx page

type HeadingProp = {
children: string;        /_ children ka type agar string ho to ya tag/
};

const Heading = ({ children }: HeadingProp) => {
return <div>{children}</div>;
};

export default Heading;

# Oscar.tsx page

// agar children ka ek <component>,component tag ya esa kuch ho to children ka type React.ReactNode dete hey .
yeh hamare context api mey bhi kaam aati hey .

type OscarType = {
children: React.ReactNode;
};

const Oscar = (props: OscarType) => {
return <div>{props.children}</div>;
};

# optional prop

type OptionalProp = {
name: string;
id: number;
attandence?: number; // agar koi detaill fill kare to bhi ok or nhi kare to bhi ok.
};

const Optional = ({ name, id, attandence }: OptionalProp) => {
return (

<div>
{name} <br />
{id} <br />
{attandence ? attandence : 0}
</div>
);
};
