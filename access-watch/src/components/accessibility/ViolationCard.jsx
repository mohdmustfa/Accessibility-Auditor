import ViolationNode from "./ViolationNode";
import WCAGTags from "./WCAGTags";

function ViolationCard({ violation }) {

  return (
    <div className="rounded-sm p-2 bg-gray-100">

      <p className="mt-2">
        <span className="font-semibold">
          Description:
        </span>{" "}
        {violation.description}
      </p>

      <p className="mt-2">
        <span className="font-semibold">
          Help:
        </span>{" "}
        {violation.help}
      </p>

      <div className="mt-6">

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 items-center mb-4">
            <div>
                <h4 className="text-lg font-semibold">
                Affected Elements : 
                </h4>
            </div>
           <WCAGTags tags={violation.tags} />
        </div>

        {violation.nodes.map((node, index) => (
          <ViolationNode
            key={index}
            node={node}
          />
        ))}

      </div>

      

    </div>
  );
}

export default ViolationCard;