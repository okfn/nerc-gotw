{ 
  "dataset": {
    "model_rev": 1,
    "name": "nerc-gotw",
    "label": "NERC Grants on the Web", 
    "description": "<p>This dataset will eventually be a complete scrape of the <a href=\"http://www.nerc.ac.uk/\">Natural Environment Research Council</a>'s <a href=\"http://gotw.nerc.ac.uk/\">Grants on the Web</a>, providing information on public money granted to scientists for work on environmental issues such as climate change, biodiversity and natural hazards.</p>\n<p>Currently, it contains only a limited subset of this data.</p>\n<p>Please also note that the license terms of this data are  unclear, and as such this dataset should not currently be considered \"open data\".</p>",
    "currency": "GBP",
    "entry_custom_html": "<h3>This grant elsewhere on the web:</h3><ul><li><a href=\"http://dev.whiteink.com:8010/grant/${entry.grant_reference}\">${entry.grant_reference} on <abbr title=\"Open Science Information Demonstrator\">OSID</abbr> research outputs viewer</a></li><li><a href=\"http://gotw.nerc.ac.uk/list_full.asp?pcode=${entry.grant_reference}\">${entry.grant_reference} on <abbr title=\"Natural Environment Research Council\">NERC</abbr> Grants on the Web</a></li><li><a href=\"http://www.google.co.uk/search?q=&quot;${entry.grant_reference}&quot;\">Search for ${entry.grant_reference} on Google</a></li></ul>"
  },
  "mapping": {
    "from": {
      "fields": [
        {"constant": "NERC", "name": "label", "datatype": "constant"}
      ],
      "type": "entity",
      "description": "Body awarding the grant",
      "label": "Spender"
    },
    "to": {
      "fields": [
        {
          "column": "recipient",
          "datatype": "string",
          "default_value": "Unknown",
          "name": "label"
        }
      ],
      "type": "entity",
      "description": "The recipient of the grant, in the format \"[department], [institution]\"",
      "label": "Recipient"
    },
    "amount": {
      "default_value": "",
      "description": "",
      "column": "value",
      "label": "",
      "datatype": "float",
      "type": "value"
    },
    "region": {
      "fields": [
        {
          "column": "region",
          "datatype": "string",
          "default_value": "Unknown",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "Recipient region",
      "type": "classifier",
      "description": "The geographical region of the recipient institution.",
      "taxonomy": "nerc-gotw:recipient:region"
    },
    "time_end": {
      "default_value": "",
      "description": "",
      "column": "end_date",
      "label": "End date",
      "datatype": "date",
      "type": "value"
    },
    "primary_classification": {
      "fields": [
        {
          "column": "primary_classification",
          "datatype": "string",
          "default_value": "Unknown",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "Science classification",
      "type": "classifier",
      "description": "The primary science classification of the grant, as assigned by NERC.",
      "taxonomy": "nerc-gotw:nerc-internal:primary-classification"
    },
    "program": {
      "fields": [
        {
          "column": "program",
          "datatype": "string",
          "default_value": "Unknown",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "NERC Programme",
      "type": "classifier",
      "description": "The NERC programme under which the grant was awarded. See http://www.nerc.ac.uk/research/programmes/list.asp.",
      "taxonomy": "nerc-gotw:nerc-internal:programme"
    },
    "award_type": {
      "fields": [
        {
          "column": "award_type",
          "datatype": "string",
          "default_value": "Unknown",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "Award type",
      "type": "classifier",
      "description": "The NERC award type. See http://www.nerc.ac.uk/funding/available/researchgrants/typesofaward/.",
      "taxonomy": "nerc-gotw:nerc-internal:award-type"
    },
    "time": {
      "default_value": "",
      "description": "",
      "column": "start_date",
      "label": "Start date",
      "datatype": "date",
      "type": "value"
    },
    "department": {
      "fields": [
        {
          "column": "department",
          "datatype": "string",
          "default_value": "Unknown",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "Recipient department",
      "type": "classifier",
      "description": "The department receiving the grant within the recipient institution.",
      "taxonomy": "nerc-gotw:recipient:department"
    },
    "institution": {
      "fields": [
        {
          "column": "institution",
          "datatype": "string",
          "default_value": "Unknown",
          "constant": "",
          "name": "label"
        }
      ],
      "label": "Recipient institution",
      "type": "classifier",
      "description": "The higher education institution receiving the grant.",
      "taxonomy": "nerc-gotw:recipient:institution"
    },
   "grant_title": {
     "default_value": "",
     "description": "",
     "column": "grant_title",
     "label": "Grant title",
     "datatype": "string",
     "type": "value"   
    },
    "grant_reference": {
      "default_value": "",
      "description": "",
      "column": "grant_reference",
      "label": "Grant reference",
      "datatype": "string",
      "type": "value"
    }
  },
  "views": [
    {
      "entity": "dataset",
      "label": "Institution",
      "name": "default",
      "dimension": "dataset",
      "breakdown": "institution",
      "filters": {"name": "nerc-gotw"}           
    },
    {
      "entity": "classifier",
      "label": "Department",
      "name": "default",
      "dimension": "institution",
      "breakdown": "department",
      "filters": {"taxonomy": "nerc-gotw:recipient:institution"}           
    },   
    {
      "entity": "classifier",
      "label": "Grant",
      "name": "default",
      "dimension": "department",
      "breakdown": "grant_reference",
      "filters": {"taxonomy": "nerc-gotw:recipient:department"}           
    }, 
    {
      "entity": "dataset",
      "label": "Geographical area",
      "name": "geographical_area",
      "dimension": "dataset",
      "breakdown": "region",
      "filters": {"name": "nerc-gotw"}           
    },
    {
      "entity": "dataset",
      "label": "Research topic",
      "name": "research_topic",
      "dimension": "dataset",
      "breakdown": "primary_classification",
      "filters": {"name": "nerc-gotw"}           
    }
  ]                       
}
