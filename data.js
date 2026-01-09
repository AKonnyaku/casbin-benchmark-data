window.BENCHMARK_DATA = {
    "lastUpdate": 1767983695995,
    "repoUrl": "https://github.com/casbin/pycasbin",
    "entries": {
        "PyCasbin": [
            {
                "commit": {
                    "time": "2026-01-10T02:08:59+08:00",
                    "id": "d7132b56a62bed140c5c9becc65c3c6a041ede1d",
                    "author": "unknown",
                    "message": "unknown"
                },
                "date": 1767982598321,
                "tool": "pycasbin",
                "benchmarks": [
                    {
                        "name": "extract_tokens_short_simple",
                        "unit": "ns/op",
                        "value": 1952.235099510918
                    },
                    {
                        "name": "extract_tokens_long_simple",
                        "unit": "ns/op",
                        "value": 2346.7813802692262
                    },
                    {
                        "name": "extract_tokens_short_nested",
                        "unit": "ns/op",
                        "value": 3449.251073309333
                    },
                    {
                        "name": "extract_tokens_long_nested",
                        "unit": "ns/op",
                        "value": 4087.7689790105646
                    },
                    {
                        "name": "has_policy_small",
                        "unit": "ns/op",
                        "value": 3684.3706124366945
                    },
                    {
                        "name": "has_policy_medium",
                        "unit": "ns/op",
                        "value": 15951.351137159209
                    },
                    {
                        "name": "has_policy_large",
                        "unit": "ns/op",
                        "value": 186033.759235691
                    },
                    {
                        "name": "add_policy_small",
                        "unit": "ns/op",
                        "value": 15433.033221130412
                    },
                    {
                        "name": "add_policy_medium",
                        "unit": "ns/op",
                        "value": 633787.5426794447
                    },
                    {
                        "name": "add_policy_large",
                        "unit": "ns/op",
                        "value": 435662.47424516146
                    },
                    {
                        "name": "remove_policy_small",
                        "unit": "ns/op",
                        "value": 3832.275141210287
                    },
                    {
                        "name": "remove_policy_medium",
                        "unit": "ns/op",
                        "value": 16499.8099554934
                    },
                    {
                        "name": "remove_policy_large",
                        "unit": "ns/op",
                        "value": 150875.82761463005
                    },
                    {
                        "name": "rbac_model_sizes_large",
                        "unit": "ns/op",
                        "value": 652634974.600005
                    },
                    {
                        "name": "rbac_model_large",
                        "unit": "ns/op",
                        "value": 47612665.89999309
                    },
                    {
                        "name": "rbac_model_with_domains_pattern_large",
                        "unit": "ns/op",
                        "value": 92557.20001419832
                    },
                    {
                        "name": "raw",
                        "unit": "ns/op",
                        "value": 538.3357651980443
                    },
                    {
                        "name": "basic_model",
                        "unit": "ns/op",
                        "value": 61972.23320160269
                    },
                    {
                        "name": "rbac_model",
                        "unit": "ns/op",
                        "value": 63778.17109287878
                    },
                    {
                        "name": "rbac_model_sizes_small",
                        "unit": "ns/op",
                        "value": 8308568.889830239
                    },
                    {
                        "name": "rbac_model_sizes_medium",
                        "unit": "ns/op",
                        "value": 58998238.235293806
                    },
                    {
                        "name": "rbac_model_small",
                        "unit": "ns/op",
                        "value": 566786.0946277292
                    },
                    {
                        "name": "rbac_model_medium",
                        "unit": "ns/op",
                        "value": 5047065.225130594
                    },
                    {
                        "name": "rbac_model_with_resource_roles",
                        "unit": "ns/op",
                        "value": 71683.36823801533
                    },
                    {
                        "name": "rbac_model_with_domains",
                        "unit": "ns/op",
                        "value": 75949.18447540609
                    },
                    {
                        "name": "abac_model",
                        "unit": "ns/op",
                        "value": 43108.351674882666
                    },
                    {
                        "name": "abac_rule_model",
                        "unit": "ns/op",
                        "value": 60030705.82352918
                    },
                    {
                        "name": "key_match_model",
                        "unit": "ns/op",
                        "value": 67205.1093710712
                    },
                    {
                        "name": "rbac_with_deny",
                        "unit": "ns/op",
                        "value": 90454.65750581467
                    },
                    {
                        "name": "priority_model",
                        "unit": "ns/op",
                        "value": 64215.789483400076
                    },
                    {
                        "name": "globmatch",
                        "unit": "ns/op",
                        "value": 116245.26220801099
                    },
                    {
                        "name": "role_manager_small",
                        "unit": "ns/op",
                        "value": 100021.09793819611
                    },
                    {
                        "name": "role_manager_medium",
                        "unit": "ns/op",
                        "value": 1526081.4675675717
                    },
                    {
                        "name": "role_manager_large",
                        "unit": "ns/op",
                        "value": 10043938.499998149
                    },
                    {
                        "name": "build_role_links_with_pattern_large",
                        "unit": "ns/op",
                        "value": 6778949.8108110875
                    },
                    {
                        "name": "build_role_links_with_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 7158231.034965438
                    },
                    {
                        "name": "build_role_links_with_pattern_and_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 7152410.97101229
                    },
                    {
                        "name": "has_link_with_pattern_large",
                        "unit": "ns/op",
                        "value": 4197.600009092639
                    },
                    {
                        "name": "has_link_with_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 2451.473680988975
                    },
                    {
                        "name": "has_link_with_pattern_and_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 3947.3999947858824
                    }
                ]
            },
            {
                "commit": {
                    "time": "2026-01-10T02:28:13+08:00",
                    "id": "b76df5be96cf8d1dc4fbf8ed6c7183d2a10f49ec",
                    "author": "unknown",
                    "message": "unknown"
                },
                "date": 1767983695995,
                "tool": "pycasbin",
                "benchmarks": [
                    {
                        "name": "extract_tokens_short_simple",
                        "unit": "ns/op",
                        "value": 1854.0273308237488
                    },
                    {
                        "name": "extract_tokens_long_simple",
                        "unit": "ns/op",
                        "value": 2374.9691778133983
                    },
                    {
                        "name": "extract_tokens_short_nested",
                        "unit": "ns/op",
                        "value": 3339.2917539824384
                    },
                    {
                        "name": "extract_tokens_long_nested",
                        "unit": "ns/op",
                        "value": 3929.2050785204447
                    },
                    {
                        "name": "has_policy_small",
                        "unit": "ns/op",
                        "value": 3827.2234289673984
                    },
                    {
                        "name": "has_policy_medium",
                        "unit": "ns/op",
                        "value": 16987.92374247246
                    },
                    {
                        "name": "has_policy_large",
                        "unit": "ns/op",
                        "value": 188080.68891190755
                    },
                    {
                        "name": "add_policy_small",
                        "unit": "ns/op",
                        "value": 16967.358637765446
                    },
                    {
                        "name": "add_policy_medium",
                        "unit": "ns/op",
                        "value": 495886.17405294173
                    },
                    {
                        "name": "add_policy_large",
                        "unit": "ns/op",
                        "value": 453131.6458574073
                    },
                    {
                        "name": "remove_policy_small",
                        "unit": "ns/op",
                        "value": 4051.0995512993522
                    },
                    {
                        "name": "remove_policy_medium",
                        "unit": "ns/op",
                        "value": 17322.953722254726
                    },
                    {
                        "name": "remove_policy_large",
                        "unit": "ns/op",
                        "value": 186091.37066027382
                    },
                    {
                        "name": "rbac_model_sizes_large",
                        "unit": "ns/op",
                        "value": 655414120.8000033
                    },
                    {
                        "name": "rbac_model_large",
                        "unit": "ns/op",
                        "value": 50280722.68421032
                    },
                    {
                        "name": "rbac_model_with_domains_pattern_large",
                        "unit": "ns/op",
                        "value": 106564.79998942814
                    },
                    {
                        "name": "raw",
                        "unit": "ns/op",
                        "value": 513.8713349640199
                    },
                    {
                        "name": "basic_model",
                        "unit": "ns/op",
                        "value": 66146.40315776767
                    },
                    {
                        "name": "rbac_model",
                        "unit": "ns/op",
                        "value": 63688.26471457816
                    },
                    {
                        "name": "rbac_model_sizes_small",
                        "unit": "ns/op",
                        "value": 7912661.096000192
                    },
                    {
                        "name": "rbac_model_sizes_medium",
                        "unit": "ns/op",
                        "value": 60661141.11764625
                    },
                    {
                        "name": "rbac_model_small",
                        "unit": "ns/op",
                        "value": 565940.9474707886
                    },
                    {
                        "name": "rbac_model_medium",
                        "unit": "ns/op",
                        "value": 5037630.398936079
                    },
                    {
                        "name": "rbac_model_with_resource_roles",
                        "unit": "ns/op",
                        "value": 73051.05233046132
                    },
                    {
                        "name": "rbac_model_with_domains",
                        "unit": "ns/op",
                        "value": 76104.14944213127
                    },
                    {
                        "name": "abac_model",
                        "unit": "ns/op",
                        "value": 42745.953895528815
                    },
                    {
                        "name": "abac_rule_model",
                        "unit": "ns/op",
                        "value": 59717678.529412076
                    },
                    {
                        "name": "key_match_model",
                        "unit": "ns/op",
                        "value": 67641.7847488117
                    },
                    {
                        "name": "rbac_with_deny",
                        "unit": "ns/op",
                        "value": 93042.5909565063
                    },
                    {
                        "name": "priority_model",
                        "unit": "ns/op",
                        "value": 63346.25281758328
                    },
                    {
                        "name": "globmatch",
                        "unit": "ns/op",
                        "value": 116141.18156253903
                    },
                    {
                        "name": "role_manager_small",
                        "unit": "ns/op",
                        "value": 98149.01600671932
                    },
                    {
                        "name": "role_manager_medium",
                        "unit": "ns/op",
                        "value": 1494177.0680627548
                    },
                    {
                        "name": "role_manager_large",
                        "unit": "ns/op",
                        "value": 10204908.979165595
                    },
                    {
                        "name": "build_role_links_with_pattern_large",
                        "unit": "ns/op",
                        "value": 7196943.407407414
                    },
                    {
                        "name": "build_role_links_with_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 7465507.656715728
                    },
                    {
                        "name": "build_role_links_with_pattern_and_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 7818107.4850738505
                    },
                    {
                        "name": "has_link_with_pattern_large",
                        "unit": "ns/op",
                        "value": 4462.000003968569
                    },
                    {
                        "name": "has_link_with_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 2948.578945823723
                    },
                    {
                        "name": "has_link_with_pattern_and_domain_pattern_large",
                        "unit": "ns/op",
                        "value": 4117.800006042671
                    }
                ]
            }
        ]
    }
};