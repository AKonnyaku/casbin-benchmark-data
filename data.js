window.BENCHMARK_DATA = {
    "lastUpdate": 1767982598321,
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
            }
        ]
    }
};