SELECT
                                            
                                            t1.donor_id,
                                            t1.name,
                                            t1.description,
                                            t1.profession,
                                            t1.education,
                                            t1.gender,
                                            t1.date_of_birth,
                                            t1.religion_id,
                                            t1.blood_group_id,
                                            t1.email,
                                            t1.phone,
                                            t1.website,
                                            t1.address,
                                            t1.city,
                                            t1.country,
                                            t1.state,
                                            t1.zip_code,
                                            t1.map,
                                            t1.photo,
                                            t1.facebook,
                                            t1.twitter,
                                            t1.linkedin,
                                            t1.googleplus,
                                            t1.pinterest,
                                            t1.agent_id,
                                            t1.status,

                                            t2.religion_id,
                                            t2.religion_name,

                                            t3.blood_group_id,
                                            t3.blood_group_name


                                            FROM tbl_donor t1

                                            JOIN tbl_religion t2
                                            ON t1.religion_id = t2.religion_id

                                            JOIN tbl_blood_group t3
                                            ON t1.blood_group_id = t3.blood_group_id