export default function Icon({ name, size = 20, className = "" }: { name: string, size: number, className: string })
{
	return (
		<svg
			className={`fill-current ${className}`}
			width={size.toString() + "px"}
			height={size.toString() + "px"}
		>
			<use xlinkHref={`/icons/solid.svg#${name}`} />
		</svg>
	);
}
